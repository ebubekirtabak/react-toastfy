import { ADD_SIMPLE_TOAST, CLEAR_SIMPLE_TOAST } from './actionTypes';


export function addSimpleToast(title) {
  return { type: ADD_SIMPLE_TOAST, title };
}

export function clearSimpleToast(id) {
  return { type: CLEAR_SIMPLE_TOAST, id };
}

/*
  const addSimpleToast = title => dispatch(addSimpleToast(title))
  const clearSimpleToast = title => dispatch(clearSimpleToast(title))
  addSimpleToast(title)
*/
