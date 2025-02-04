import { SignUpController } from "./signup";
import { MissingParamsError } from "../errors";
import { InvalidParamsError } from "../errors/invalid-params";
import { EmailValidator } from "../protocols/email-validator";

interface SutTypes {
  sut: SignUpController;
  emailValidatorStub: EmailValidator;
}

const makeSut = (): SutTypes => {
  class EmailValidatorStub implements EmailValidator {
    isValidEmail(email: string): boolean {
      return true;
    }
  }

  const emailValidatorStub = new EmailValidatorStub();
  const sut = new SignUpController(emailValidatorStub);
  return {
    sut,
    emailValidatorStub,
  };
};

describe("Should sign up the user correctly", () => {
  test("Should returns 400 if no name is provided", () => {
    const {sut} = makeSut()
    const httpRequest = {
        body:{
            email: "any@email.com",
            password:"123",
            confirmPassword: "123",
        }
    }
  })

  test("Should returns 400 if no email is provided", () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: "example@gmail.com",
        password: "string",
        confirmPassword: "string",
      },
    };
    
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamsError(`email`));
  });

  test("Should returns 400 if no password is provided", () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "example@gmail.com",
        confirmPassword: "string",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamsError(`password`));
  });

  test("Should returns 400 if no passwordConfirm is provided", () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "example@gmail.com",
        password: "string",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamsError(`confirmPassword`)
    );
  });

  test("Should returns 400 if an invalid email is provided", () => {
    const { sut, emailValidatorStub } = makeSut();
    jest.spyOn(emailValidatorStub, "isValidEmail").mockReturnValueOnce(false);

    const httpRequest = {
      body: {
        name: "any_name",
        email: "invalid_email@gmail.com",
        password: "string",
        confirmPassword: "string",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    console.log(httpResponse);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamsError("email"));
  });


  test("Should call EmailValidator with correct email", () => {
    
    const { sut, emailValidatorStub } = makeSut();
    const isValidEmailSpy =  jest.spyOn(emailValidatorStub, "isValidEmail")

    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_Email@gmail.com",
        password: "string",
        confirmPassword: "string",
      },
    };
    sut.handle(httpRequest);
    expect(isValidEmailSpy).toHaveBeenCalledWith("any_Email@gmail.com");
  });


});
