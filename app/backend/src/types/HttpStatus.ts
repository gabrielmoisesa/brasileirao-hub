type SuccessStatus = 'OK';

type ErrorStatus = 'NOT_FOUND' | 'UNAUTHORIZED';

type HttpStatus = SuccessStatus | ErrorStatus;

export { SuccessStatus, ErrorStatus, HttpStatus };
