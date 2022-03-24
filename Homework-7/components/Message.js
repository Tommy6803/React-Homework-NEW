import propTypes from "prop-types";
import { ListItem } from "@material-ui/core";



export const Message = (props) => {
    return (
        <ListItem>
            <ListText>
                [{props.author}]: {props.text}
            </ListText>
        </ListItem>
    );
};

Message.propTypes = {
    text: propTypes.string,
    author: propTypes.string
};