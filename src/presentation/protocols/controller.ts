import { HttpResquest, HttpResponse } from "./http";

export interface Controller{
    handle(httpRequest: HttpResponse): HttpResponse
}