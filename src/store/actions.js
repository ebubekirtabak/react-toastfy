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

export function toastOnDestroy(toast) {
	return { type: TOAST_ON_DESTROY, toast }
}

export function clearSimpleToast(toast) {
	return { type: CLEAR_SIMPLE_TOAST, toast };
}

export function toastOkayAction(toast) {
	return { type: TOAST_OKAY_ACTION, toast };
}

export function toastDenyAction(toast) {
	return { type: TOAST_DENY_ACTION, toast };
}
