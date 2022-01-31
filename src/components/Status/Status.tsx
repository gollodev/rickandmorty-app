import { FC } from 'react';
import './Status.css';

interface StatusProps {
    label: string;
};

interface ChangeAlert {
    backgroundColor: string;
};

const Status: FC<StatusProps> = ({ label }): JSX.Element => {

    const changeAlert = (label: string): ChangeAlert => {
        switch (label) {
            case 'Alive':
                return { backgroundColor: '#008000a8' };
            case 'Dead':
                return { backgroundColor: '#ff0000ab' };
            default:
                return { backgroundColor: '#0000ffb0' };
        };
    };
    
    return (
        <div className="Status">
            <span className="Status-Alert" style={changeAlert(label)}></span>
            <span className="Status-Title">{label}</span>
        </div>
    );
};

export default Status;