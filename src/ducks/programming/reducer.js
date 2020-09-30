import { submit, remove, filtrar } from "./actions";
import { addElements, removeElements, filterElements } from "../../api";
// eslint-disable-next-line import/prefer-default-export
export const programming = (state = { data: [], filter: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case submit.TRIGGER:
      return { ...state, loading: true, error: false };
    case submit.SUCCESS:
      return {
        ...state,
        loading: false,
        data: addElements(state.data, action.payload),
        filtrar: [],
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
        filtrar: [],
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

    case filtrar.TRIGGER:
      return { ...state, loading: true, error: false };
    case filtrar.SUCCESS:
      return {
        ...state,
        loading: false,
        filtrar: filterElements(state.data, action.payload),
        error: false,
      };
    case filtrar.FAILURE:
      return { ...state, loading: false, error: true };
    case filtrar.FULFILL:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
