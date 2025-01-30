import { MissingParamsError } from "../errors"
import { HttpResponse, HttpResquest } from "../protocols/http"
import {badRequest} from "../helpers"

export class SignUpController{

    handle(httpRequest: HttpResquest): HttpResponse{
        const requiredFields = ["name", "email", "password", "confirmPassword"]
        for(const field of requiredFields){
            if(!httpRequest.body[field]){
                return badRequest(new MissingParamsError(field))
            }
        }
    }
}