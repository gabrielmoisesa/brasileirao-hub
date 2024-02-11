import { ErrorStatus, SuccessStatus } from './HttpStatus';

type message = { message: string };

type ServiceResponseError = {
  status: ErrorStatus;
  data: message;
};

type ServiceResponseSuccess<T> = {
  status: SuccessStatus;
  data: T;
};

type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;

export { message, ServiceResponseError, ServiceResponseSuccess, ServiceResponse };
