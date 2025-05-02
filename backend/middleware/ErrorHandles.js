// This code defines a custom error handler class in JavaScript.
export class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }

  export default ErrorHandler;

  


    // A custom error handler class extends the built-in Error class 
    // to allow setting a specific status code and message for errors.
    //  By calling super(message) and using Error.captureStackTrace, 
    // it helps track where the error occurred, making it useful for 
    // consistent error handling in web applications. 