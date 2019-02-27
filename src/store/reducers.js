import { combineReducers } from 'redux';
import {
    ADD_SIMPLE_TOAST,
    CLEAR_SIMPLE_TOAST, TOAST_DENY_ACTION,
    TOAST_OKAY_ACTION,
    TOAST_ON_CLEAR_ACTION,
    TOAST_ON_DESTROY
} from './actionTypes';

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
        case TOAST_ON_CLEAR_ACTION:
            return [ ...state,
                action.toast
            ];
		case TOAST_OKAY_ACTION:
			return [ ...state,
				action.toast
			];
        case TOAST_DENY_ACTION:
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
