type SuccessStatus = 'OK' | 'CREATED';

type ErrorStatus = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'UNPROCESSABLE_ENTITY' ;

type HttpStatus = SuccessStatus | ErrorStatus;

export { SuccessStatus, ErrorStatus, HttpStatus };
