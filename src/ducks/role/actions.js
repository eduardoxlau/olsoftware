import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SUBMIT_ROLE, REMOVE_ROLE, FILTRAR_ROLE } from "./types";

export const remove = createRoutine(REMOVE_ROLE);

export const submit = createRoutine(SUBMIT_ROLE);
export const bindedRole = bindRoutineToReduxForm(submit);

export const filter = createRoutine(FILTRAR_ROLE);
export const bindedFiltrarRole = bindRoutineToReduxForm(filter);
