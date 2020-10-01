import { submit, remove, filter } from "./actions";
import { addElements, removeElements, filterElements } from "../../api";
// eslint-disable-next-line import/prefer-default-export
export const role = (
  state = { data: [], filter: [], isFilter: false },
  action
) => {
  switch (action.type) {
    case submit.TRIGGER:
      return { ...state, loading: true, error: false };
    case submit.SUCCESS:
      return {
        ...state,
        loading: false,
        data: addElements(state.data, action.payload),
        filter: [],
        isFilter: false,
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
        filter: [],
        isFilter: false,
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

    case filter.TRIGGER:
      return { ...state, loading: true, error: false };
    case filter.SUCCESS:
      return {
        ...state,
        loading: false,
        filter: filterElements(state.data, action.payload),
        isFilter: true,
        error: false,
      };
    case filter.FAILURE:
      return { ...state, loading: false, error: true };
    case "@@redux-form/RESET":
      return { ...state, filter: [], isFilter: false };
    case filter.FULFILL:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
