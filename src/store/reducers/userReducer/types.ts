export interface UserState {
  getUserInfoLoading: boolean;
  getUserInfoError: null;
  getUserInfoDone: boolean;

  getUserFollowingsLoading: boolean;
  getUserFollowingsError: null;
  getUserFollowingsDone: boolean;

  getUserFollowersLoading: boolean;
  getUserFollowersError: null;
  getUserFollowersDone: boolean;

  userInfo: User | null;
  followers: number;
  followings: number;
}
