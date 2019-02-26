import {
	ADD_SIMPLE_TOAST,
	CLEAR_SIMPLE_TOAST,
	TOAST_OKAY_ACTION,
	TOAST_DENY_ACTION,
	TOAST_ON_DESTROY
} from './actionTypes';

export function addSimpleToast(toast) {
	return { type: ADD_SIMPLE_TOAST, toast };
}

export toastOnDestrOy(toast) {
	return { type: TOAST_ON_DESTROY, toast}
}

export function clearSimpleToast(id) {
	return { type: CLEAR_SIMPLE_TOAST, id };
}

export function toastOkayAction(id) {
	return { type: TOAST_OKAY_ACTION, id };
}

export function toastDenyAction(id) {
	return { type: TOAST_DENY_ACTION, id };
}

/*
  const addSimpleToast = title => dispatch(addSimpleToast(title))
  const clearSimpleToast = title => dispatch(clearSimpleToast(title))
  addSimpleToast(title)
*/
