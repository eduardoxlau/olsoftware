import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SUBMIT_PROGRAMMING } from "./types";

export const submit = createRoutine(SUBMIT_PROGRAMMING);
export const bindedProgramming = bindRoutineToReduxForm(submit);
