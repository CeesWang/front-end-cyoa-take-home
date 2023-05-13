import React, {useState} from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const NameInputField = styled.input`
    border-width: medium;
    margin-bottom: 10px;
    padding: 5px;
    width: 20vw;
`;
const MessageInputField = styled.textarea`
    border-width: medium;
    height: 20vh;
    margin-bottom: 10px;
    padding: 5px;
    resize: none;
    width: 20vw;
`;

export default function CreateCommentContainer({postComment}) {
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
            <NameInputField data-testid="name-input-field" type="text" value={name} onChange={handleNameChange}/>
            <MessageInputField data-testid="message-input-field" type="text" value={message} onChange={handleMessageChange}/>
            <button disabled={name === "" || message === ""} onClick={handlePostComment}>Comment</button>
        </CommentContainer>
    );
}
