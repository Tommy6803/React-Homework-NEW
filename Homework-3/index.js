import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "./components/ChatList";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200 px 1tr"
    }
});

export const Homework = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const classes = useStyles();


    const sendMassege = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            id: Date.now(),
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const resetForm = () => {
        setValue("");
    };


    const onSendMessage = (event) => {
        event.preventDefault();
        sendMassege("user", value);
        resetForm();
    };
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }

        const tail = messageList[messageList.length - 1];
        if (tail.author === "bot") {
            return;
        }

        sendMassege("bot", "hello");
    }, [messageList]);


    return (
        <div className={classes.wrapper}>
            <ChatList
                list={[
                    {
                        name: "name",
                        id: "1"
                    },
                    {
                        name: "name",
                        id: "2"
                    },
                    {
                        name: "name",
                        id: "3"
                    },
                    {
                        name: "name",
                        id: "4"
                    }
                ]}
            />
            <div>
                <MessageList messageList={messageList} />
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>
    );
};

