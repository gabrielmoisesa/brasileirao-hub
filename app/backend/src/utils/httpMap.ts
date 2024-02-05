import { HttpStatus } from '../types/HttpStatus';

export default function httpMap(status: HttpStatus): number {
  switch (status) {
    case 'OK':
      return 200;
    case 'NOT_FOUND':
      return 404;
    default:
      return 500;
  }
}
