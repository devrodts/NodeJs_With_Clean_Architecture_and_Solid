import { SignUpController } from "./signup"

describe("Should sign up the user correctly", () => {


    test("Should returns 400 if no name is provided", () => {
        const sut = new SignUpController()
        const httpRequest = {
            body:{
                email: 'example@gmail.com',
                password: 'string',
                passwordConfirmation: 'string'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)

    })
})