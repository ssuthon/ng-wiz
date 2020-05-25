import { Injectable } from '@angular/core';
import { WizContext, Wiz, WizSpec } from './step/types';
import { WizRegistrar } from './step/registrar';
import { Subject } from 'rxjs';

export enum WizEvent {
  BEGUN,
  NEXT,
  ENDED
}

@Injectable({
  providedIn: 'root'
})
export class WizService implements WizContext{

  $event = new Subject<WizEvent>()
  registrar: WizRegistrar

  currentWiz: Wiz
  currentStep: number
  runningWizs: Wiz[]

  constructor() { 
    this.registrar = new WizRegistrar(this)
  }

  begin(specs: WizSpec[]){
    this.runningWizs = this.registrar.createAll(specs)
    this.updateCurrentStep(0)
    this.$event.next(WizEvent.BEGUN)
  }

  next(){
    let next_step = this.currentStep + 1
    
    this.$event.next(WizEvent.NEXT)
    this.updateCurrentStep(next_step)
  }

  end(){
    this.updateCurrentStep(-1)
    this.$event.next(WizEvent.ENDED)
  }

  handleAChange(v: number): void{
    if(this.currentWiz){
      this.currentWiz.handleAChange(v)
    }
  }

  private updateCurrentStep(next_step){
    if(next_step >= 0){
      if(next_step < this.runningWizs.length){
        this.currentStep = next_step
        this.currentWiz = this.runningWizs[this.currentStep]
      }else{
        this.end()
      }
    }else{
      this.currentStep = -1
      this.currentWiz = null
    }
  }
}
