import { Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Message } from "../Messages";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { withChats } from "../../hocs/withChats";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "250px 1tr"
    }
});


export const ChatsRender = ({
    chats,
    onCreateChat,
    onDeleteChat
}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDeleteChat} list={chats} />
                <Button onClick={onCreateChat}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Message} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>

    );
};

export const Chats = withChats(ChatsRender);