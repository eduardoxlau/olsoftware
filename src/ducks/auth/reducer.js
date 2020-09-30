import { login, logout } from "./actions";

// eslint-disable-next-line import/prefer-default-export
export const auth = (state = { isAuth: false, user: {} }, action) => {
  switch (action.type) {
    case login.TRIGGER:
    case logout.TRIGGER:
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
    case logout.FAILURE:
      return { ...state, loading: false, user: {}, isAuth: false, error: true };
    case login.FULFILL:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuth: true,
        error: false,
      };

    case logout.SUCCESS:
    case logout.FULFILL:
      return {
        ...state,
        loading: false,
        user: {},
        isAuth: false,
        error: false,
      };
    default:
      return state;
  }
};
