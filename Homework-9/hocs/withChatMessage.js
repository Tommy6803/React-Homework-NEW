import { useDispatch, useSelector } from "react-redux";
import { hasChatById } from "../store/chats/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addMessageWithThunk, offTrackingAddMessageWithThunk, offTrackingRemovedMessageWithThunk, onTrackingAddMessageWithThunk, onTrackingRemovedMessageWithThunk } from "../store/messages/actions";
import { getMessagesListById } from "../store/messages/selectors";
import { createMessage } from "../helpers";
import { getUserId } from "../store/users/selectors";




export const withChatMessages = (Component) => {
    return (props) => {
        const { chatId } = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesListById(chatId));
        const hasChat = useSelector(hasChatById(chatId));
        const userId = useSelector(getUserId);

        const onSendMessage = (text) => {
            const message = createMessage(userId, text)
            dispatch(addMessageWithThunk(message, chatId))
        };

        useEffect(() => {
            dispatch(onTrackingAddMessageWithThunk(chatId))
            dispatch(onTrackingRemovedMessageWithThunk(chatId))

            return () => {
                dispatch(onTrackingAddMessageWithThunk(chatId))
                dispatch(onTrackingRemovedMessageWithThunk(chatId))
            }
        }, [chatId])

        return <Component
            {...props}
            messageList={messageList}
            hasChat={hasChat}
            onSendMessage={onSendMessage} />
    }
}