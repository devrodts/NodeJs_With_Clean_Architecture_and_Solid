import { MissingParamsError } from "../errors"
import { HttpResponse, HttpResquest } from "../protocols/http"
import {badRequest} from "../helpers"
import { Controller } from "../protocols/controller"

export class SignUpController implements Controller{
    handle(httpRequest: HttpResquest): HttpResponse{
        const requiredFields = ["name", "email", "password", "confirmPassword"]
        for(const field of requiredFields){
            if(!httpRequest.body[field]){
                return badRequest(new MissingParamsError(field))
            }
        }
    }
}