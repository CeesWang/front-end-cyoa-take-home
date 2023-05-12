import React, {useState} from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const NameInputField = styled.input`
    border-width: medium;
    width: 20vw;
    margin-bottom: 10px;
    padding: 5px;
`;
const MessageInputField = styled.textarea`
    border-width: medium;
    width: 20vw;
    height: 20vh;
    margin-bottom: 10px;
    padding: 5px;
    resize: none;
`;

function CreateCommentContainer({postComment}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handlePostComment = () => {
        postComment({'name': name, 'message': message});
    } 
    
    return (
        <CommentContainer>
            <h2>Name</h2>
            <NameInputField type="text" value={name} onChange={handleNameChange}/>
            <MessageInputField type="text" value={message} onChange={handleMessageChange}/>
            <button disabled={name === "" || message === ""} onClick={handlePostComment}>Comment</button>
        </CommentContainer>
    );
}

export default CreateCommentContainer;
