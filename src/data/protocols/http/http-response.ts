export enum HttpStatusCode{
    unauthorized = 401,
    ok = 200,
    serverError = 500,
    notfound = 404,
    created = 201,
    notContent = 204,
    badRequest = 400
}

export type HttpResponse<R> = {
    statusCode: HttpStatusCode,
    body?: R,
}