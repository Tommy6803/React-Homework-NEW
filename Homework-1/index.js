import { Message } from "./components";

const text = '1-st Masseger'

export const Homework = () => {
    return (
        <div className="message">
            <h1 className="message-header">Homework-1</h1>
            <Message className="message-text" text={text}></Message>
        </div>
    );
};