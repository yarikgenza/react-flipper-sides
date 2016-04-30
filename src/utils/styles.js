
const MAXIMIZED = {
  width: '100%',
  height: '100%',
};

const FRONT_BACK = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
};

export const FRONT_STYLE = Object.assign({}, MAXIMIZED, FRONT_BACK, {
  position: 'absolute',
  transform: 'rotateY(0deg)',
  overflow: 'hidden',
});

export const BACK_STYLE = Object.assign({}, MAXIMIZED, FRONT_BACK, {
  position: 'absolute',
  transform: 'rotateY(180deg)',
});

export const STACK_FLIPPER = Object.assign({}, MAXIMIZED, {
  position: 'absolute',
  perspective: '1000px',
});

export const STACK_CONTAINER = Object.assign({}, MAXIMIZED, {
  position: 'relative',
  transformStyle: 'preserve-3d',
});
