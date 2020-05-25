import { Component, OnInit } from '@angular/core';
import { WizService, WizEvent } from './wiz/wiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wiz';
  value = 0

  constructor(public wizService: WizService){}
  ngOnInit(): void {
    this.wizService.$event.subscribe(event => {
      console.log(event)
    })
    
    this.wizService.begin([
      {name: 'A', spec:{threshold: 3, seconds: 5}},
      {name: 'A', spec:{threshold: 7}},
    ])    
  }

  updateValue(){
    this.wizService.handleAChange(this.value)
  }
}
