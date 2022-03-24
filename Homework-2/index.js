import { useState, useEffect } from "react";

export const Homework = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");


    const sendMassege = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const resetForm = () => {
        setValue("");
    };


    const onSubmitMessage = (event) => {
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
        <div>
            <form onSubmit={onSubmitMessage}>
                <input onChange={onChangeMessageInput}
                    placeholder="type message"
                    value={value}
                    tape="text" />
                <button>send</button>
            </form>
            <ul>
                {messageList.map((item, index) => (
                    <li key={index}>
                        {item.author} - {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

