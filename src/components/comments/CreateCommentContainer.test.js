import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateCommentContainer from "./CreateCommentContainer";

describe("Create comment logic", () => {
    it("disables the button when name is empty", () => {
        render(<CreateCommentContainer />);
        const createCommentButton = screen.getByRole('button');
        const nameInput = screen.getByTestId("name-input-field");
        fireEvent.change(nameInput, { target: { value: 'test' }});

        expect(nameInput.value).toBe('test');
        expect(createCommentButton).toBeDisabled();
    });
    it("disables the button when message is empty", () => {
        render(<CreateCommentContainer />);
        const createCommentButton = screen.getByRole('button');
        const messageInput = screen.getByTestId('message-input-field');
        fireEvent.change(messageInput, { target: { value: 'test message' }});

        expect(messageInput.value).toBe('test message');
        expect(createCommentButton).toBeDisabled();
    });
    it("enables the button when name and message is NOT empty", () => {
        render(<CreateCommentContainer />);
        const createCommentButton = screen.getByRole('button');
        const nameInput = screen.getByTestId("name-input-field");
        const messageInput = screen.getByTestId('message-input-field');
        fireEvent.change(nameInput, { target: { value: 'test' }});
        fireEvent.change(messageInput, { target: { value: 'test message' }});
        
        expect(createCommentButton).not.toBeDisabled();
    });
});