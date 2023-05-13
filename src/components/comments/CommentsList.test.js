import * as React from 'react';
import {render} from '@testing-library/react';
import {convertDateTimeToString} from '../../utils/DateUtil'
import CommentList from './CommentsList';

describe("Create comment logic", () => {
    const comments = [
        {id: 1, name: 'test 1', message: 'test message 1', created: "2023-01-01 12:00:00"},
        {id: 2, name: 'test 2', message: 'test message 2', created: "2023-02-02 12:00:00"},
        {id: 3, name: 'test 3', message: 'test message 3', created: "2023-03-03 12:00:00"},
    ];
    it("shows the list of comments", () => {
        const {getByTestId} = render(<CommentList comments={comments}/>);
        comments.forEach((comment) => {
            const {id, name, message, created} = comment;
            const commentNode = getByTestId(`comment ${id}`);
            const nameAndDateCreated = `${name} on ${convertDateTimeToString(created)}`;
            
            expect(commentNode).toHaveTextContent(message);
            expect(commentNode).toHaveTextContent(nameAndDateCreated);
        });
    });
});