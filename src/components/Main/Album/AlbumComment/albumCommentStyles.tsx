import styled from "@emotion/styled";

export const CommentListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentItemContainer = styled.li`
  background-color: #f0f2f5;
  border-radius: 12px;
  color: #050505;
  padding: 8px 12px;
  margin: 1rem;
  .comment_userName {
    font-size: 14px;
    font-weight: bold;
  }
  .comment_content {
    margin: 0;
    word-break: break-word;
  }
`;

export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  .profile {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  .comment_input {
    margin: 0 10px;
    width: 100%;
    outline: none;
    border-radius: 30px;
    border: none;
    background-color: #f0f2f5;
    padding: 10px 20px;
  }
`;
