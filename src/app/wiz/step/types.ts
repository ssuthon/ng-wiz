export interface WizContext{
    next(): void
}

export interface Wiz {
    setContext(context: WizContext): void
    handleAChange(v: number): void
}

export interface WizSpec {
    name: string
    spec: any
}


export abstract class WizAdaptor implements Wiz{
    context: WizContext
    constructor(readonly name: string, readonly spec: any){}

    setContext(context: WizContext): void {
        this.context = context
    }

    abstract handleAChange(v: number): void
}


