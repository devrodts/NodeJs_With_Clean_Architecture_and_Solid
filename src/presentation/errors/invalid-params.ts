export class InvalidParamsError extends Error{
    constructor(paramName: string){
        super(`Invalid Param: ${paramName}`)
        this.name = "InvalidParamsError"
    }
}