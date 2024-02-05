import { ErrorStatus, SuccessStatus } from './HttpStatus';

type ServiceResponseError = {
  status: ErrorStatus;
  data: { message: string };
};

type ServiceResponseSuccess<T> = {
  status: SuccessStatus;
  data: T;
};

type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;

export { ServiceResponseError, ServiceResponseSuccess, ServiceResponse };
