import { createAction } from "typesafe-actions";

export const SEARCH_MAP = "search/SEARCH_MAP";
export const SET_CENTER_SEARCHING = "search/SET_CENTER_SEARCHING";

export const searchMap = createAction(SEARCH_MAP);
export const setCenterSearching = createAction(SET_CENTER_SEARCHING);
