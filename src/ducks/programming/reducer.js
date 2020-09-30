import { submit } from "./actions";

// eslint-disable-next-line import/prefer-default-export
export const submitProgramming = (state = { data: [] }, action) => {
  switch (action.type) {
    case submit.TRIGGER:
      return { ...state, loading: true, error: false };
    case submit.SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
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
    default:
      return state;
  }
};
