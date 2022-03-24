import { ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import propTypes from "prop-types";
import { Link } from "react-router-dom";



export const Chat = ({ name, id, onRemove }) => {
    return (
        <ListItem onClick={() => onRemove(id)} component={Link} to={`/chats/${id}`}>
            <ListItemText>{name}</ListItemText>
            <ListItemSecondaryAction onClick={(e) => {
                e.stopPropagation();
                onRemove(id)
            }} >del</ListItemSecondaryAction>
        </ListItem >
    );
};

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
};