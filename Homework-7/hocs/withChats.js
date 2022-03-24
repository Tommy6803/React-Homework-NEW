import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { createChat } from "../helpers";
import { getChatList } from "../store/chats/selectors";
import { addChat, removeChat } from "../store/chats/actions";
import { removeMessageByChatID } from "../store/message/actions";


export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();
        const onCreateChat = useCallback(() => {
            dispatch(removeChat(chatId))
            dispatch(removeMessageByChatID(chatId))

        }, [])

        return <Component {...props}
            chats={chats}
            onCreateChat={onCreateChat}
            onDeleteChat={onDeleteChat} />
    }
}