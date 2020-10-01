import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import { SUBMIT_PROFILE, REMOVE_PROFILE, FILTRAR_PROFILE } from "./types";

export const remove = createRoutine(REMOVE_PROFILE);

export const submit = createRoutine(SUBMIT_PROFILE);
export const bindedProfile = bindRoutineToReduxForm(submit);

export const filter = createRoutine(FILTRAR_PROFILE);
export const bindedFiltrarProfile = bindRoutineToReduxForm(filter);
