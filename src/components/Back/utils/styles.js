import { FRONT_BACK, MAXIMIZED } from '../../../utils/styles';

export const BACK_STYLE = Object.assign({}, MAXIMIZED, FRONT_BACK, {
  position: 'absolute',
  transform: 'rotateY(180deg)',
});

export default {
  BACK_STYLE,
};
