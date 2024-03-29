import { FC } from 'react';
import './Spinner.css';

const Spinner: FC = (): JSX.Element => {
    return (
        <div className="Spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;