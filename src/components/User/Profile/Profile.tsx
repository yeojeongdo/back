import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "components/Common/Button/Button";
import useAuth from "hooks/redux/useAuth";
import useUser from "hooks/redux/useUser";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import {
  EditForm,
  EditProfileImage,
  EditUserInfo,
  ProfileContainer,
  ProfileEditButton,
  ProfileImage,
  ProfileImageContainer,
  ProfileInfo,
} from "./profileStyles";
import { editUserProfile } from "apis/userAPI";
import { toast } from "react-toastify";

const Profile: React.VFC = () => {
  const [toggleEditContent, setToggleEditContent] = useState<boolean>(false);
  const [profileFile, setProfileFile] = useState<File>();
  const [prevProfileImage, setPrevProfileImage] = useState<string>("");

  const { userState, userFollow, getIsFollow } = useUser();
  const { userInfo, userFollowLoading } = userState;

  const { authState } = useAuth();
  const { myInfo } = authState;

  const [name, onChangeName] = useInput(myInfo?.name);
  const [birth, onChangeBirth, setBirth] = useInput(
    myInfo?.birthDay.split("T")[0]
  );

  const handleRequestFollow = useCallback(async () => {
    if (userInfo) {
      userFollow(userInfo.id);
    }
  }, [userFollow, userInfo]);

  const handleToggleEdit = useCallback(() => {
    setToggleEditContent((prev) => !prev);
  }, []);

  const handleProfileInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event) {
        const profileImage = event.target.files![0];
        setProfileFile(profileImage);
        setPrevProfileImage(URL.createObjectURL(profileImage));
      }
    },
    []
  );
  const handleEditProfile = useCallback(() => {
    const form = new FormData();
    if (profileFile) {
      form.append("file", profileFile);

      editUserProfile(form)
        .then((response) => {
          toast.success("프로필을 변경했습니다.");
        })
        .catch((error) => {
          toast.error("에러가 발생했습니다.");
        });
    }
  }, [profileFile]);

  const { isFollow } = userState;

  useEffect(() => {
    if (userInfo) {
      getIsFollow(userInfo.id);
    }
  }, [getIsFollow, userInfo]);

  useEffect(() => {
    if (birth) {
      setBirth(
        birth.replace(/-/g, "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
      );
    }
  }, [birth, setBirth]);

  return (
    <>
      <ProfileContainer>
        {userState.getUserInfoLoading ? (
          <LoadingPage />
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <ProfileImageContainer>
                <ProfileImage
                  profile={userInfo?.image && `http://${userInfo?.image}`}
                />
                {userInfo?.id === myInfo?.id && (
                  <ProfileEditButton onClick={handleToggleEdit}>
                    ⚙️
                  </ProfileEditButton>
                )}
              </ProfileImageContainer>

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
            </div>
            <EditForm>
              {toggleEditContent && (
                <>
                  <EditProfileImage>
                    <h3>프로필 사진 변경</h3>
                    <div className="profile-tool">
                      <input
                        type="file"
                        multiple
                        id="profileImage"
                        className="file-input"
                        onChange={handleProfileInput}
                      />
                      {prevProfileImage && (
                        <img
                          className="prev-profile"
                          src={prevProfileImage}
                          alt={prevProfileImage}
                        />
                      )}
                    </div>
                    <Button onClick={handleEditProfile}>프로필 변경</Button>
                  </EditProfileImage>
                  <EditUserInfo>
                    <h3>유저 정보 변경</h3>
                    <form>
                      <div className="name">
                        이름
                        <Input
                          type="text"
                          placeholder="이름을 입력해 주세요."
                          value={name}
                          onChange={onChangeName}
                        />
                        <Button>({name})로 변경</Button>
                      </div>
                      <div className="birth">
                        생년월일
                        <Input
                          type="text"
                          placeholder="생년월일을 입력해 주세요."
                          value={birth}
                          onChange={onChangeBirth}
                        />
                        <Button>생년월일 변경</Button>
                      </div>
                    </form>
                  </EditUserInfo>
                </>
              )}
            </EditForm>
          </>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
