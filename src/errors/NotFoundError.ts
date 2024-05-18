export class NotFoundError extends Error {
    statusCode: number
    message: string
    constructor() {
        super()
        this.statusCode = 404
        this.message = 'Not Found'
    }
}
