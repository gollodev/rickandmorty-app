import { FC } from 'react';
import './Header.css';

import Container from '../Container';
import Logo from '../Logo';

const Header: FC = (): JSX.Element => {
    return (
        <div className="Header">
            <Container>
                <header>
                    <div className="Logo">
                        <Logo/>
                    </div>
                 </header>
            </Container>
        </div>
    );
};

export default Header;