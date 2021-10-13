import useAlbum from "hooks/redux/useAlbum";
import {
  CommentInputContainer,
  CommentListContainer,
} from "./albumCommentStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import { VFC } from "react";

interface IAlbumCommentProps {
  commentInputRef: any;
}

const AlbumComment: VFC<IAlbumCommentProps> = ({ commentInputRef }) => {
  const { albumState } = useAlbum();

  return (
    <>
      <CommentListContainer />
      <CommentInputContainer>
        <img
          src={albumState.album?.user.image || DefaultProfile}
          alt=""
          className="profile"
        />
        <input
          ref={commentInputRef}
          type="text"
          className="comment_input"
          placeholder="댓글을 입력하세요."
        />
      </CommentInputContainer>
    </>
  );
};

export default AlbumComment;
