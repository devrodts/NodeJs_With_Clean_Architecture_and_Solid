import { SignUpController } from "./signup"
import { MissingParamsError } from "../errors"


describe("Should sign up the user correctly", () => {


    test("Should returns 400 if no name is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body:{
                email: 'any_name',
                password: 'string',
                passwordConfirmation: 'string'
            }
        }

        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError("name"))
    })

    test("Should returns 400 if no email is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body:{
                name: 'example@gmail.com',
                password: 'string',
                passwordConfirmation: 'string'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError(`email`))
    })

    test("Should returns 400 if no password is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body:{
                name: 'any_name',
                email: "example@gmail.com",
                passwordConfirmation: 'string'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError(`password`))
    })

    test("Should returns 400 if no passwordConfirm is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body:{
                name: 'any_name',
                email: "example@gmail.com",
                password: 'string'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamsError(`confirmPassword`))
    })
})