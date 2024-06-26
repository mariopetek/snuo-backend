import { NextFunction, Request, Response } from 'express'
import { NotFoundError } from '../errors/NotFoundError'
import { DatabaseError } from 'pg'
import { ValidationError } from '../errors/ValidationError'

export function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
) {
    let status
    let message
    console.log(error)
    if (error instanceof NotFoundError || error instanceof ValidationError) {
        status = error.statusCode
        message = error.message
    } else if (error instanceof DatabaseError) {
        status = 400
        message = 'Bad Request'
    } else {
        status = 500
        message = 'Internal Server Error'
    }
    return res.status(status).json({ message })
}
