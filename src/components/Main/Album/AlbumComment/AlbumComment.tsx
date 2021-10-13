import useAlbum from "hooks/redux/useAlbum";
import autosize from "autosize";
import {
  CommentInputContainer,
  CommentItemContainer,
  CommentListContainer,
} from "./albumCommentStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import { useEffect, VFC } from "react";

interface IAlbumCommentProps {
  commentInputRef: any;
}

const AlbumComment: VFC<IAlbumCommentProps> = ({ commentInputRef }) => {
  const { albumState, getComments, createComment } = useAlbum();

  useEffect(() => {
    if (albumState.album?.id) {
      getComments(albumState.album?.id);
    }
  }, [albumState.album?.id, getComments]);

  useEffect(() => {
    if (commentInputRef.current) {
      autosize(commentInputRef.current);
    }
  }, [commentInputRef]);

  return (
    <>
      <CommentListContainer>
        {albumState.comments?.map((comment) => (
          <CommentItemContainer key={comment.id}>
            <span className="comment_userName">{comment.user.name}</span>
            <p className="comment_content">{comment.content}</p>
          </CommentItemContainer>
        ))}
      </CommentListContainer>
      {/* TODO: Comment List Rendering */}
      <CommentInputContainer>
        <img
          src={albumState.album?.user.image || DefaultProfile}
          alt=""
          className="profile"
        />
        <textarea
          ref={commentInputRef}
          className="comment_input"
          placeholder="댓글을 입력하세요."
        />
      </CommentInputContainer>
    </>
  );
};

export default AlbumComment;
