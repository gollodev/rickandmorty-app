import { FC, MouseEvent } from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    fullWidth?: boolean;
    mediumWidth?: boolean;
    size: 'small' | 'medium';
    onClick?: (e: any) => any;
};

const Button: FC<ButtonProps> = ({ label, fullWidth, size, onClick, mediumWidth }): JSX.Element => {
    return (
        <button 
            className={
                'Button' + 
                (fullWidth ? ' fullWidth' : ' ') + 
                (size === 'small' ? ' small' : ' medium') +
                (mediumWidth ? ' mediumWidth' : '')
            }
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;