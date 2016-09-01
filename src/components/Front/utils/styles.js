import { FRONT_BACK, MAXIMIZED } from '../../../utils/styles';

export const FRONT_STYLE = Object.assign({}, MAXIMIZED, FRONT_BACK, {
  position: 'absolute',
  transform: 'rotateY(0deg)',
  overflow: 'hidden',
});

export default {
  FRONT_STYLE,
};
