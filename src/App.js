import React, { useEffect, useState } from 'react';
import {Api} from './api/index';
import {CREATE_COMMENT_URL, GET_ALL_COMMENTS_URL} from './constants/Constants';
import CommentsList from './components/comments/CommentsList';
import CreateCommentContainer from './components/comments/CreateCommentContainer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Api.get(GET_ALL_COMMENTS_URL).then(data => {
      setComments(data);  
    });
  }, []);
  
  const postComment = (comment) => {
    Api.post(CREATE_COMMENT_URL, comment).then(newComment => {
      setComments([...comments, newComment]);  
    });
  }

  console.log(comments);
  return (
    <AppContainer>
      <CreateCommentContainer postComment={postComment}/>
      {comments.length > 0 && <CommentsList comments={comments}/>}   
    </AppContainer>
  );
}

export default App;
