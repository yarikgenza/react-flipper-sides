import * as exceptionMethods from 'exception-methods';
import { PageSideTypesEnum } from 'react-redux-flipper';

export function isStackOpen(status) {
  switch (status) {
    case PageSideTypesEnum.MAIN:
    case PageSideTypesEnum.GOING_TO_MAIN:
    case PageSideTypesEnum.PREPARE_TO_COVER:
      return true;
    case PageSideTypesEnum.COVER:
    case PageSideTypesEnum.GOING_TO_COVER:
    case PageSideTypesEnum.PREPARE_TO_MAIN:
      return false;
    default:
      if (process.env.NODE_ENV !== 'production') {
        throw exceptionMethods.rangeException('status', status);
      }
      return true;
  }
}
