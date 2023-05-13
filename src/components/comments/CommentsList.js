import {convertDateTimeToString} from '../../utils/DateUtil';
import styled from 'styled-components';

const CommentListContainer = styled.div` 
    align-items: flex-start;
    height: 60vh;
    margin-top: 10px;
    overflow-y: auto;
`;
const CommentList = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
`;
const Comment = styled.div`
    border: 5px solid;
    border-width: medium;
    margin-bottom: 5px;
    padding: 5px;
    width: 30vw;
`;
const CommentMessage = styled.div`
    margin-bottom: 5px;
`;

export default function CommentsList({comments}) {    
  return (
    <CommentListContainer>
        <CommentList>
        {comments.map(comment => {
            const {id, name, message, created} = comment;        
            return (
                <Comment key={id}>
                    <CommentMessage>{message}</CommentMessage>  
                    <div>{`${name} on ${convertDateTimeToString(created)}`}</div>  
                </Comment>
            );
        })}      
        </CommentList>
    </CommentListContainer>
  );
}
