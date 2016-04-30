import { FLIP_APP, LOAD_STACKS } from '../constants/app-label-keys';
import { PageSideTypesEnum, FlippingActionTypes, stackFlippingReducers } from 'react-redux-flipper';

const initialState = {
	flip: PageSideTypesEnum.MAIN,
	stacks: []
};

export function mainAppReducers(state = initialState, action) {
	let stacks;
	switch (action.type) {
		case FLIP_APP:
			return flipAllPages(state);
		case LOAD_STACKS:
			return Object.assign({}, state, {
				stacks: action.stacks
			});
			return state;
		case FlippingActionTypes.PREPARE_TO_MAIN:
		case FlippingActionTypes.GOING_TO_MAIN:
		case FlippingActionTypes.MAIN_SET_DONE:
		case FlippingActionTypes.PREPARE_TO_COVER:
		case FlippingActionTypes.GOING_TO_COVER:
		case FlippingActionTypes.COVER_SET_DONE:
			stacks = state.stacks.map(stack => stack.id === action.stackId
				? Object.assign({}, stack, stackFlippingReducers(stack, action))
				: stack
			);
			return Object.assign({}, state, {
				stacks: stacks
			});
		default:
			return state;
	}
}

function flipAllPages(state) {
	const
		stacksKeys = Object.keys(state.stacks),
		newStacks = [];

	let newFlip,
		newStackTypeEvent;

	// TODO: 6 steps
	switch (state.flip) {
		case PageSideTypesEnum.MAIN:
			newFlip = PageSideTypesEnum.COVER;
			newStackTypeEvent = FlippingActionTypes.PREPARE_TO_COVER;
			break;
		case PageSideTypesEnum.COVER:
			newFlip = PageSideTypesEnum.MAIN;
			newStackTypeEvent = FlippingActionTypes.PREPARE_TO_MAIN;
			break;
		default:
			// TODO: ignore if already moving? no!
			return state;
	}

	stacksKeys.forEach(function(pageKey) {
		const
			page = state.stacks[pageKey];

		newStacks[pageKey] = stackFlippingReducers(page, {
			type: newStackTypeEvent
		});
	});

	return Object.assign({}, state, {
		flip: newFlip,
		stacks: newStacks
	});
}

export function getFlip(state) {
	return state.flip;
}

export function getStacks(state) {
	return state.stacks;
}
