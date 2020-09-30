import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SIGN_IN, SIGN_OUT } from "./types";

export const login = createRoutine(SIGN_IN);
export const logout = createRoutine(SIGN_OUT);
export const bindedLogin = bindRoutineToReduxForm(login);
