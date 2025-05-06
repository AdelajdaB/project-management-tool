import { HttpStatusCodeType, HTTPSTATUS } from '../config/http.config';
import { ErrorCodeEnumType, ErrorCodeEnum } from "../enums/error-code.enum";

export class AppError extends Error {
    public statusCode: HttpStatusCodeType;
    public errorCode?: ErrorCodeEnumType;

    constructor(
        message: string,
        statusCode = HTTPSTATUS.INTERNAL_SERVER_ERRROR,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message)
        this.statusCode = statusCode
        this.errorCode = errorCode
        Error.captureStackTrace(this, this.constructor)
    }
}

export class HttpExeption extends AppError {
    constructor(
        message = "Http Exeption Error",
        statusCode: HttpStatusCodeType,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, statusCode, errorCode)
    }
}

export class InternalServerError extends AppError {
    constructor(
        message = "Internal Server Error",
        statusCode = HTTPSTATUS.INTERNAL_SERVER_ERRROR,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, statusCode, errorCode || ErrorCodeEnum.INTERNAL_SERVER_ERROR)
    }
}

export class NotFoundExeption extends AppError {
    constructor (
        message = "Resource not found",
        statusCode = HTTPSTATUS.NOT_FOUND,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, statusCode, errorCode || ErrorCodeEnum.RESOURCE_NOT_FOUND)
    }
}

export class BadRequestException extends AppError {
    constructor(
        message = "Bad Request", 
        statusCode = HTTPSTATUS.BAD_REQUEST,
        errorCode?: ErrorCodeEnumType
    ) {
      super(message, statusCode, errorCode || ErrorCodeEnum.VALIDATION_ERROR);
    }
  }

export class UnauthorizedException extends AppError {
    constructor (
        message = "Unauthorized Access",
        statusCode = HTTPSTATUS.FORBIDDEN,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, statusCode, errorCode || ErrorCodeEnum.ACCESS_UNAUTHORIZED)
    }
}