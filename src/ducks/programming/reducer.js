import { submit, remove } from "./actions";
import { addElements, removeElements } from "../../api";
// eslint-disable-next-line import/prefer-default-export
export const programming = (state = { data: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case submit.TRIGGER:
      return { ...state, loading: true, error: false };
    case submit.SUCCESS:
      return {
        ...state,
        loading: false,
        data: addElements(state.data, action.payload),
        error: false,
      };
    case submit.FAILURE:
      return { ...state, loading: false, error: true };
    case submit.FULFILL:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case remove.TRIGGER:
      return { ...state, loading: true, error: false };
    case remove.SUCCESS:
      return {
        ...state,
        loading: false,
        data: removeElements(state.data, action.payload.id),
        error: false,
      };
    case remove.FAILURE:
      return { ...state, loading: false, error: true };
    case remove.FULFILL:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
