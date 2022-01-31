import { FC } from 'react';
import './SerieCounter.css';

interface SerieCounterProps {
    characters: number;
    episodes: number;
    locations: number;
};

const SerieCounter: FC<SerieCounterProps> = ({ characters, episodes, locations }): JSX.Element => {
    return (
        <div className="SerieCounter">
            <div className="counter numbers">
                <span>La Serie en numeros:</span>
            </div>
            <div className="numbers">
                <span>{episodes} Número de episodios</span>
            </div>
            <div className="numbers">
                <span>{locations} Número de locations</span>
            </div>
            <div className="numbers">
                <span>{characters} Número de personajes</span>
            </div>
        </div>
    );
};

export default SerieCounter;