import { FC , ChangeEvent } from 'react';
import './TextField.css';

interface TextFieldProps {
    type        : string;
    placeholder : string;
    value       : string;
    onChange    : (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextField: FC<TextFieldProps> = ({ type, placeholder, value, onChange }): JSX.Element => {
    return (
        <input 
            className="TextField" 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextField;