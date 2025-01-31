import { MissingParamsError } from "../errors"
import { HttpResponse, HttpResquest } from "../protocols/http"
import {badRequest} from "../helpers"
import { Controller } from "../protocols/controller"
import { EmailValidator } from "../protocols/email-validator"
import { InvalidParamsError } from "../errors/invalid-params"
export class SignUpController implements Controller{

    private readonly emailValidator: EmailValidator
    constructor(emailValidator: EmailValidator){
        this.emailValidator = emailValidator
    }

    handle(httpRequest: HttpResquest): HttpResponse{
        const requiredFields = ["name", "email", "password", "confirmPassword"]
        for(const field of requiredFields){
            if(!httpRequest.body[field]){
                return badRequest(new MissingParamsError(field))
            }
        }

        const isValid = this.emailValidator.isValidEmail(httpRequest
            .body.email
        )
        if(!isValid){
            return badRequest(new InvalidParamsError('email'))
        }
    }
}