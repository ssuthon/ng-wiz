import { WizAdaptor } from './types'

export interface WizASpec {
    threshold: number
    seconds?: number
}

export class WizA extends WizAdaptor{
    remainingSeconds: number
    private progressInterval: ReturnType<typeof setInterval>

    constructor(spec: WizASpec){
        super("A", spec)
        this.reset()
    }

    reset(){
        this.remainingSeconds = 0
        if(this.progressInterval){
            clearInterval(this.progressInterval)
        }
        this.progressInterval = null
    }

    handleAChange(v: number): void {
        if(v >= this.spec.threshold){            
            if(this.spec.seconds > 0){
                this.waitForSeconds(this.spec.seconds)
            }else{
                this.context.next()
            }
        }
    }   

    waitForSeconds(seconds: number){
        this.remainingSeconds = seconds
        this.progressInterval = setInterval(()=> {
            this.remainingSeconds--
        }, 1000)
        setTimeout(()=> {
            this.reset()
            this.context.next()
        }, seconds * 1000)
    }
}