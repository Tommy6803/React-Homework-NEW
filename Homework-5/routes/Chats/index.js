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
    const classes = useStyles();
    const [chats, setChats] = useState(CHATS);
    const onRemove = (chatId) => {

        setChats(chats.filter(({ id }) => id !== chatId));
    };
    return (
        <div className={classes.wrapper}>
            <ChatList onRemove={onRemove} list={chats} />
            <button>add chat</button>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>

    );


};