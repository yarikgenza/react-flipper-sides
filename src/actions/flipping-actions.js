import {
  PREPARE_TO_MAIN,
  PREPARE_TO_COVER,
  GOING_TO_MAIN,
  GOING_TO_COVER,
  MAIN_SET_DONE,
  COVER_SET_DONE,
} from '../constants/flipping-action-types';

export function goToMain(stackId) {
  return { type: PREPARE_TO_MAIN, stackId };
}

export function goToCover(stackId) {
  return { type: PREPARE_TO_COVER, stackId };
}

export function goingToMain(stackId) {
  return { type: GOING_TO_MAIN, stackId };
}

export function goingToCover(stackId) {
  return { type: GOING_TO_COVER, stackId };
}

export function goToMainDone(stackId) {
  return { type: MAIN_SET_DONE, stackId };
}

export function goToCoverDone(stackId) {
  return { type: COVER_SET_DONE, stackId };
}
