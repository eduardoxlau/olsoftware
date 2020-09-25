import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SIGN_IN } from "./types";

export const login = createRoutine(SIGN_IN);
export const bindedLogin = bindRoutineToReduxForm(login);
