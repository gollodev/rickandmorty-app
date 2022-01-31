import { FC } from 'react';
import './Message.css';

interface MessageProps {
    label: string;
};

const Message: FC<MessageProps> = ({ label }): JSX.Element => <h2 className="Message">{label}</h2>;

export default Message;