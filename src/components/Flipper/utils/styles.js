import { MAXIMIZED } from '../../../utils/styles';

export const STACK_FLIPPER = Object.assign({}, MAXIMIZED, {
  position: 'absolute',
  perspective: '1000px',
});

export const STACK_CONTAINER = Object.assign({}, MAXIMIZED, {
  position: 'relative',
  transformStyle: 'preserve-3d',
});

export default {
  STACK_FLIPPER,
  STACK_CONTAINER,
};
