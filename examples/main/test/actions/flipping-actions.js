import { FlippingActionTypes } from 'react-redux-flipper';

export function goToMain(stackId) {
  return { type: FlippingActionTypes.PREPARE_TO_MAIN, stackId };
}

export function goToCover(stackId) {
  return { type: FlippingActionTypes.PREPARE_TO_COVER, stackId };
}

export function goingToMain(stackId) {
  return { type: FlippingActionTypes.GOING_TO_MAIN, stackId };
}

export function goingToCover(stackId) {
  return { type: FlippingActionTypes.GOING_TO_COVER, stackId };
}

export function goToMainDone(stackId) {
  return { type: FlippingActionTypes.MAIN_SET_DONE, stackId };
}

export function goToCoverDone(stackId) {
  return { type: FlippingActionTypes.COVER_SET_DONE, stackId };
}
