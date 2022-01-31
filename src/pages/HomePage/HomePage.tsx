// react imports
import { 
    FC, 
    FormEvent, 
    ChangeEvent,
    useState, 
    useCallback, 
    useEffect
} from 'react';

// styles import
import './HomePage.css';

// components imports
import Container    from '../../components/Container';
import FormGroup    from '../../components/FormGroup';
import TextField    from '../../components/TextField';
import Button       from '../../components/Button';
import SerieCounter from '../../components/SerieCounter';
import Card         from '../../components/Card';
import CardDetail   from '../../components/CardDetail';
import Message      from '../../components/Message';

// api imports
import axios from 'axios';
const baseApiUrl = 'https://rickandmortyapi.com/api';

// interfaces
interface Info {
    count   : number;
    next    : string;
    pages   : number;
    prev    : number | null;
};

interface LocationCharacter {
    name: string;
    url : string;
};

interface OriginCharacter {
    name: string;
    url: string;
};
interface Character {
    id      : number;
    name    : string;
    image   : string;
    created : string;
    episode : Array<string>;
    location: LocationCharacter;
    gender  : string;
    species : string;
    status  : string;
    type    : string;
    url     : string;
    origin  : OriginCharacter;
};

interface Episode {
    id          : number;
    name        : string;
    url         : string;
    episode     : number;
    created     : string;
    air_date    : string;
    characters  : Array<string>;
};

interface Location {
    id          : number;
    name        : string;
    created     : string;
    dimension   : string;
    type        : string;
    url         : string;
    residents   : Array<string>;
};
interface DataAPI {
    info    : Info;
    results : Array<Character | Episode | Location>
};

// set initialState
const initialState: DataAPI = {
    info: {
        count: 0,
        next: '',
        pages: 0,
        prev: 0
    },
    results: []
};

const characterDetailState: Character = {
    id      : 0,
    name    : '',
    image   : '',
    created : '',
    episode : [],
    location: { name: '', url: '' },
    origin  : { name: '', url: '' },
    gender  : '',
    species : '',
    status  : '',
    type    : '',
    url     : ''
};

const HomePage: FC = (): JSX.Element => {
    const [query, setQuery]           = useState<string>('');
    const [results, setResults]       = useState<any[]>([]);
    const [characters, setCharacters] = useState<DataAPI>(initialState);
    const [episodes, setEpisodes]     = useState<DataAPI>(initialState);
    const [locations, setLocations]   = useState<DataAPI>(initialState);
    const [error, setError]           = useState<boolean>(false);
    const [characterDetail, setCharacterDetail] = useState<Character>(characterDetailState);

    const getApi = useCallback(async () => {
        try {
            const response = await axios.get(baseApiUrl);
            if (response.status === 200) {

                // get each API 
                const apiCharacters = response.data.characters;
                const apiEpisodes   = response.data.episodes;
                const apiLocations  = response.data.locations;

                // send http get request
                const responseCharacters = await axios.get(apiCharacters);
                const responseEpisodes   = await axios.get(apiEpisodes);
                const responseLocations  = await axios.get(apiLocations);

                // resolve all response
                Promise.all([responseCharacters, responseEpisodes, responseLocations])
                       .then(data => {
                            const dataCharacters = data[0].data;
                            const dataEpisodes   = data[1].data;
                            const dataLocations  = data[2].data;
                            setCharacters(dataCharacters);
                            setEpisodes(dataEpisodes);
                            setLocations(dataLocations);
                            setResults(dataCharacters.results);
                            setError(false);
                       })
                       .catch(error => setError(true));
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    }, []);

    useEffect(() => {
        getApi();
    }, [getApi]);

    const handleTextField = (e: ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const foundCharacters = results.filter((result: Character): any => 
            result.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(foundCharacters);
        
        console.log(results);
    };

    return (
        <div className="HomePage">
            <Container>
                {
                    error ? 
                        (<Message label="Recarga la pagina o Intenta mas tarde :("/>)
                        :
                        (<div className="HomePage-Content">
                            <div className="HomePage-Search">
                                <FormGroup onSubmit={handleSubmit}>
                                    <TextField
                                        type="search"
                                        placeholder="Escribe el nombre de tu personaje favorito"
                                        value={query}
                                        onChange={handleTextField}
                                    />
                                    <Button label="Buscar" size="medium"/>
                                </FormGroup>
                            </div>
                            <div className="HomePage-SerieCounter">
                                <SerieCounter
                                    characters={characters.info.count}
                                    episodes={episodes.info.count}
                                    locations={locations.info.count}
                                />
                            </div>
                            <div className="HomePage-Results">
                                <div className="results">
                                    {
                                        results && results.length > 0 ? (
                                            results.map(result => 
                                                <div className="results-card">
                                                    <Card
                                                        key={result.id}
                                                        name={result.name}
                                                        status={result.status}
                                                        species={result.species}
                                                        image={result.image}
                                                        onClick={() => setCharacterDetail(result)}
                                                    />
                                                </div>
                                            )
                                        ) : (<h2>No items found :(</h2>)
                                    }
                                </div>
                                <div className="detail">
                                    <CardDetail
                                        image={characterDetail.image}
                                        name={characterDetail.name}
                                        gender={characterDetail.gender}
                                        location={characterDetail.location.name}
                                        origin={characterDetail.origin.name}
                                        episodesNumbers={characterDetail.episode.length}
                                    />
                                </div>
                            </div>
                        </div>)
                }
            </Container>
        </div>
    );
};

export default HomePage;