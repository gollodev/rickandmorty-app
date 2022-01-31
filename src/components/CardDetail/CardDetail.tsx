import { FC } from 'react';
import './CardDetail.css';

interface CardDetailProps {
    image: string;
    name: string;
    gender: string;
    location: string;
    origin: string;
    episodesNumbers: number;
};

const CardDetail: FC<CardDetailProps> = ({ 
    image, 
    name, 
    gender, 
    location, 
    origin, 
    episodesNumbers 
}): JSX.Element => {
    return (
        <div className="Card-Detail">
            <div className="Card-Detail-Title">
                <h2>Detalle</h2>
            </div>
            <div className="Card-Detail-Image">
                <img alt="detalle" src={image} />
            </div>
            <div className="Card-Detail-Name">
                <h3>{name}</h3>
            </div>
            <div className="Card-Detail-Features">
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Origin: {origin}</li>
                    <li>Location: {location}</li>
                    <li>Number of episodes: {episodesNumbers}</li>
                </ul>
            </div>
        </div>
    );
};

export default CardDetail;