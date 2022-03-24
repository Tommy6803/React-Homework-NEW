import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { MessageInput } from "../../components/MessageInput";
import { MessageList } from "../../components/MessageList";
import { CHATS } from "../../mocks/chats";
import { useDispatch, useSelector } from 'react-redux';
import { getChatMessagesById } from "../../store/messages/selectors";
import { createMessage } from "../../store/messages/action";
import { hasChatById } from "../../store/chats/selectors";


export const Messages = () => {
    const { chatId } = useParams();
    const messageList = useSelector(getChatMessagesById(chatId));
    const dispatch = useDispatch();


    const sendMessage = (author, text) => {
        const newMessage = {
            author,
            text
        };
        dispatch(createMessage(newMessage, chatId))
    };

    const onSendMessage = (value) => {
        sendMessage("user", value);
    };

    useEffect(() => {
        if (!messageList || messageList.length === 0) {
            return;
        }

        const tail = messageList[messageList.length - 1];
        if (tail.author === "bot") {
            return;
        }

        sendMessage("bot", "hello");
    }, [messageList]);

    if (!hasChat) {
        return <Redirect to="/chats" />;
    }

    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>
    );
};