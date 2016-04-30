import { FLIP_APP, LOAD_STACKS } from '../constants/app-label-keys';

export const flipApp = () => {
	return {
		type: FLIP_APP
	};
};

export const loadStacks = (stacks) => {
	return {
		type: LOAD_STACKS,
		stacks
	};
};
