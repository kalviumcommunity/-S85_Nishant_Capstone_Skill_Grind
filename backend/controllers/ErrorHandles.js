class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Captures the current stack trace and excludes constructor from it
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;


    // A custom error handler class extends the built-in Error class 
    // to allow setting a specific status code and message for errors.
    //  By calling super(message) and using Error.captureStackTrace, 
    // it helps track where the error occurred, making it useful for 
    // consistent error handling in web applications. 