import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SUBMIT_USER, REMOVE_USER, FILTRAR_USER } from "./types";

export const remove = createRoutine(REMOVE_USER);

export const submit = createRoutine(SUBMIT_USER);
export const bindedUser = bindRoutineToReduxForm(submit);

export const filter = createRoutine(FILTRAR_USER);
export const bindedFiltrarUser = bindRoutineToReduxForm(filter);
