import * as PageSideTypesEnum from '../enums/page-side-types-enum';
import {
  PREPARE_TO_MAIN,
  GOING_TO_MAIN,
  MAIN_SET_DONE,
  PREPARE_TO_COVER,
  GOING_TO_COVER,
  COVER_SET_DONE,
} from '../constants/flipping-action-types';

// TODO: merge with store part
const initialState = {
  id: '',
  side: PageSideTypesEnum.MAIN,
  pages: {},
  prevModeId: undefined,
};

export function stackFlippingReducers(state = initialState, action) {
  switch (action.type) {
    case PREPARE_TO_MAIN:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.PREPARE_TO_MAIN,
      });
    case GOING_TO_MAIN:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.GOING_TO_MAIN,
      });
    case MAIN_SET_DONE:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.MAIN,
      });
    case PREPARE_TO_COVER:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.PREPARE_TO_COVER,
      });
    case GOING_TO_COVER:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.GOING_TO_COVER,
      });
    case COVER_SET_DONE:
      return Object.assign({}, state, {
        side: PageSideTypesEnum.COVER,
      });
    default:
      return state;
  }
}

export function getStackPages(state) {
  return state.pages;
}
