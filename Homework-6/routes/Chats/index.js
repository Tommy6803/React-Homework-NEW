import { useCallback, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@material-ui/core";
import { Message } from "../Messages";
import { getChatList } from "../../store/chats/selectors";
import { createChat, removeChat, setChats } from "../../store/chats/actions";
import { nanoid } from "nanoid";
import { removeMessagesByChatID } from "../../store/messages/actions";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { CHATS } from "../../mocks/chats";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1tr"
    }
});


export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chatName'
        }))
    }, []);

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    }

    useEffect(() => {
        dispatch(setChats(CHATS))
    }, [])



    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list={chats} />
                <button onClick={onCreate}>Create chat</button>
            </div>
            <div>
                <Switch>
                    <Route component={Message} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>

    );


};