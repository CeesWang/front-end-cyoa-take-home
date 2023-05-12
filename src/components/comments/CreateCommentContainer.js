import React, { useEffect, useState } from 'react';
function CreateCommentContainer({postComment}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const canMessage = name === "" || message === "";
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handlePostComment = () => {
        postComment({'name': name, 'message': message});
    } 
    console.log(name);
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <input type="text" value={message} onChange={handleMessageChange}/>
            <button disabled={canMessage} onClick={handlePostComment}>Comment</button>;
        </div>
    );
}

export default CreateCommentContainer;
