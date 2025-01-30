import { MissingParamsError } from "../errors"
import { HttpResponse, HttpResquest } from "../protocols/http"
import {badRequest} from "../helpers"

export class SignUpController{

    handle(httpRequest: HttpResquest): HttpResponse{

        if(!httpRequest.body.name){
            return badRequest(new MissingParamsError("name"))
        }

        if(!httpRequest.body.email){
            return badRequest(new MissingParamsError("email"))
        }
    }
}