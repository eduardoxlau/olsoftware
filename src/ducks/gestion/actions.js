import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SUBMIT_GESTION, REMOVE_GESTION, FILTRAR_GESTION } from "./types";

export const remove = createRoutine(REMOVE_GESTION);

export const submit = createRoutine(SUBMIT_GESTION);
export const bindedGestion = bindRoutineToReduxForm(submit);

export const filter = createRoutine(FILTRAR_GESTION);
export const bindedFiltrarGestion = bindRoutineToReduxForm(filter);
