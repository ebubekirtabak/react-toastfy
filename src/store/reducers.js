import { combineReducers } from 'redux';
import { ADD_SIMPLE_TOAST, CLEAR_SIMPLE_TOAST } from './actionTypes';

function toasts(state = [], action) {
	switch (action.type) {
		case ADD_SIMPLE_TOAST:
			return [ ...state,
				action.toast
			];
		case TOAST_ON_DESTROY:
			return [ ...state,
				action.toast
			];
		case CLEAR_SIMPLE_TOAST:
			return state.map((toast, id) => {
				if (id === action.id) {
					return Object.assign({}, toast, {
						completed: !toast.completed,
					});
				}

				return toast;
			});
		default:
			return state;
	}

}

const toastApp = combineReducers({
	toasts,
});

export default toastApp;
