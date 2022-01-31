import { FC, MouseEvent } from 'react'; 
import './Card.css';

import Button from '../Button';
import Status from '../Status';
interface CardProps {
    name    : string;
    status  : string;
    species : string;
    image   : string;
    onClick : (e: any) => any;
};

const Card: FC<CardProps> = ({ name, status, species, image, onClick }): JSX.Element => {
    return (
        <div className="Card">
            <div className="Card-Image">
                <img alt="character" src={image} />
            </div>
            <div className="Card-Content">
                <div className="Card-Content-Character">
                    <div className="Card-Content-Name">
                        <h3>{name}</h3>
                    </div>
                    <div className="Card-Content-Status">
                        <Status label={status}/>
                    </div>
                    <div className="Card-Content-Species">
                        <span>{species}</span>
                    </div>
                </div>
                <div className="Card-Button">
                    <Button label="Detalle" size="small" onClick={onClick} mediumWidth/>
                </div>
            </div>
        </div>
    );
};

export default Card;