import propTypes from "prop-types";



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
    id: propTypes.string,
    text: propTypes.string,
    author: propTypes.string
};