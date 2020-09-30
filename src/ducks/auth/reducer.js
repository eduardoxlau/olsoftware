import { login } from "./actions";

// eslint-disable-next-line import/prefer-default-export
export const auth = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case login.TRIGGER:
      return { ...state, loading: true, isAuth: false, error: false };
    case login.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuth: false,
        error: false,
      };
    case login.FAILURE:
      return { ...state, loading: false, user: {}, isAuth: false, error: true };
    case login.FULFILL:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuth: true,
        error: false,
      };
    default:
      return state;
  }
};
