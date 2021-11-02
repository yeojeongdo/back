import styled from "@emotion/styled";
import { followingsAPI, getFollowState, requestFollowAPI } from "apis/userAPI";
import DefaultProfile from "assets/images/default_profile.svg";
import Button from "components/Common/Button/Button";
import useAuth from "hooks/redux/useAuth";
import useUser from "hooks/redux/useUser";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import { useCallback, useEffect, useReducer, useState } from "react";

export const ProfileContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${DefaultProfile});
`;

export const ProfileInfo = styled.section`
  .profile_name {
    text-align: center;
  }
  .profile_follow {
    display: flex;
    width: 400px;
    justify-content: center;
    &_followings {
      padding: 0 1rem;
    }
    &_followers {
      padding: 0 1rem;
    }
  }
  .request_follow {
    text-align: center;
  }
`;

const Profile: React.VFC = () => {
  const { userState, userFollow, getIsFollow } = useUser();
  const { userInfo, userFollowLoading } = userState;

  const { authState } = useAuth();
  const { myInfo } = authState;

  const handleRequestFollow = useCallback(async () => {
    if (userInfo) {
      userFollow(userInfo.id);
    }
  }, [userFollow, userInfo]);

  // TODO: Follow Toggle데이터 분리

  const { isFollow } = userState;

  useEffect(() => {
    if (userInfo) {
      getIsFollow(userInfo.id);
    }
  }, [getIsFollow, userInfo]);

  return (
    <>
      <ProfileContainer>
        {userState.getUserInfoLoading ? (
          <LoadingPage />
        ) : (
          <>
            <ProfileImage />
            <ProfileInfo>
              <h1 className="profile_name">{userInfo?.name}</h1>
              <div className="profile_follow">
                <p className="profile_follow_followings">
                  팔로잉 : {userState.followNumbers.followingNum}
                </p>
                <p className="profile_follow_followers">
                  팔로워 : {userState.followNumbers.followerNum}
                </p>
              </div>
              {userInfo?.id !== myInfo?.id && (
                <div className="request_follow">
                  {isFollow ? (
                    <Button onClick={handleRequestFollow}>언팔로우</Button>
                  ) : (
                    <>
                      {userFollowLoading ? (
                        <Button>로딩 중...</Button>
                      ) : (
                        <Button onClick={handleRequestFollow}>팔로우</Button>
                      )}
                    </>
                  )}
                </div>
              )}
            </ProfileInfo>
          </>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
