import produce from "immer";
import * as userActions from "./actions";
import { createReducer } from "typesafe-actions";
import { UserState } from "./types";

const initialState: UserState = {
  getUserInfoLoading: false,
  getUserInfoError: null,
  getUserInfoDone: false,

  getUserFollowingsLoading: false,
  getUserFollowingsError: null,
  getUserFollowingsDone: false,

  getUserFollowersLoading: false,
  getUserFollowersError: null,
  getUserFollowersDone: false,

  userInfo: null,
  followers: 0,
  followings: 0,
};

export default createReducer<UserState>(initialState, {
  [userActions.GET_USER_INFO_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = true;
      draft.getUserInfoDone = false;
      draft.getUserInfoError = null;
    }),
  [userActions.GET_USER_INFO_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = false;
      draft.getUserInfoDone = true;
      draft.userInfo = action.payload;
    }),
  [userActions.GET_USER_INFO_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserInfoLoading = false;
      draft.getUserInfoDone = false;
      draft.getUserInfoError = action.payload;
    }),
  [userActions.GET_USER_FOLLOWERS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = true;
      draft.getUserFollowersDone = false;
      draft.getUserFollowersError = null;
    }),
  [userActions.GET_USER_FOLLOWERS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = false;
      draft.getUserFollowersDone = true;
      draft.followers = action.payload;
    }),
  [userActions.GET_USER_FOLLOWERS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowersLoading = false;
      draft.getUserFollowersDone = false;
      draft.getUserFollowersError = action.payload;
    }),
  [userActions.GET_USER_FOLLOWINGS_REQUEST]: (state) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = true;
      draft.getUserFollowingsDone = false;
      draft.getUserFollowingsError = null;
    }),
  [userActions.GET_USER_FOLLOWINGS_SUCCESS]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = false;
      draft.getUserFollowingsDone = true;
      draft.followings = action.payload;
    }),
  [userActions.GET_USER_FOLLOWINGS_FAILURE]: (state, action) =>
    produce(state, (draft) => {
      draft.getUserFollowingsLoading = false;
      draft.getUserFollowingsDone = false;
      draft.getUserFollowingsError = action.payload;
    }),
});
