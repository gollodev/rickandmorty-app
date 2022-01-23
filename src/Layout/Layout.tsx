import { FC } from 'react';
import Header from '../components/Header';

const Layout: FC = ({ children }): JSX.Element => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;