export class CustomError extends Error {
    constructor(public name: string, public message: string) {
      super(message);
      this.name = name;
      Error.captureStackTrace(this, CustomError);
    }
  }
  
  export class ValidationError extends CustomError {
    constructor(message: string) {
      super('ValidationError', message);
    }
  }
  
  export class NetworkError extends CustomError {
    constructor(message: string) {
      super('NetworkError', message);
    }
  }
  
  export class ApiError extends CustomError {
    constructor(message: string) {
      super('APIError', message);
    }
  }
  