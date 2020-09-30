import { bindRoutineToReduxForm, createRoutine } from "redux-saga-routines";
import {
  SUBMIT_PROGRAMMING,
  REMOVE_PROGRAMMING,
  FILTRAR_PROGRAMMING,
} from "./types";

export const remove = createRoutine(REMOVE_PROGRAMMING);

export const submit = createRoutine(SUBMIT_PROGRAMMING);
export const bindedProgramming = bindRoutineToReduxForm(submit);

export const filter = createRoutine(FILTRAR_PROGRAMMING);
export const bindedFiltrarProgramming = bindRoutineToReduxForm(filter);
