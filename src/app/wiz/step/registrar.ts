import { WizContext, WizSpec, Wiz } from './types';
import { WizA } from './wiz_a';

export class WizRegistrar {
    constructor(private context: WizContext){}

    createAll = (specs: WizSpec[]) => specs.map(it => this.create(it.name, it.spec))

    create(name: string, spec: any): Wiz{
        let instance: Wiz = null
        switch(name){
            case 'A': instance = new WizA(spec); break;
        }
        if(instance){
            instance.setContext(this.context)
        }
        return instance;
    }
}