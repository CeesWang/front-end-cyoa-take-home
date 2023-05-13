import React, { useEffect, useState } from 'react';
import {Api} from './api/index';
import {CREATE_COMMENT_URL, GET_ALL_COMMENTS_URL, WEBSOCKET_URL} from './constants/Constants';
import CommentsList from './components/comments/CommentsList';
import CreateCommentContainer from './components/comments/CreateCommentContainer';
import styled from 'styled-components';
import useWebSocket from 'react-use-websocket';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Api.get(GET_ALL_COMMENTS_URL).then(data => {
      setComments(data);  
    });
  }, []);

  useWebSocket(WEBSOCKET_URL, { // https://www.npmjs.com/package/react-use-websocket
    onOpen: () => {
      // testing
      // console.log("Web socket connection has been made");
    },
    onMessage: (event) => {
      const comment = JSON.parse(event.data);
      setComments([...comments, comment]);  
    },
    onClose: () => {
      // testing
      // console.log("Web socket lost connection");
    },
    shouldReconnect: (_closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: (attemptNumber) =>
      Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
  });

  const postComment = (comment) => {
    Api.post(CREATE_COMMENT_URL, comment).then(newComment => {
      setComments([...comments, newComment]);  
    });
  }

  return (
    <AppContainer>
      <CreateCommentContainer postComment={postComment}/>
      {comments.length > 0 && <CommentsList comments={comments}/>}   
    </AppContainer>
  );
}
