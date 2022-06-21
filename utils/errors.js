class ExpressError extends Error {
    constructor(message, status){
        this.message = message
        this.status = status
    }
   
}

class BadRequestError extends ExpressError {
    constructor(message, status){
        this.message = "Bad request"
        this.status = 400
    }
   
}
class NotFoundError extends ExpressError {
    constructor(message, status){
        this.message = "Not found"
        this.status = 404
    }
   

}


module.exports.ExpressError = ExpressError
module.exports.NotFoundError = NotFoundError
module.exports.BadRequestError = BadRequestError