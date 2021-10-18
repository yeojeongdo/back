import styled from "@emotion/styled";
import DefaultProfile from "assets/images/default_profile.svg";
import useUser from "hooks/redux/useUser";
import LoadingPage from "pages/LoadingPage/LoadingPage";

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
`;

const Profile: React.VFC = () => {
  const { userState } = useUser();
  const { userInfo } = userState;

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
            </ProfileInfo>
          </>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
