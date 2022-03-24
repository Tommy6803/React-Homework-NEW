import styles from './Message.css';

export const Message = (props) => {
    return <div className={styles.message}>{props.text}</div>;
};