type SuccessStatus = 'OK';

type ErrorStatus = 'NOT_FOUND';

type HttpStatus = SuccessStatus | ErrorStatus;

export { SuccessStatus, ErrorStatus, HttpStatus };
