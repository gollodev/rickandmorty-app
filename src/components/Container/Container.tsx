import { FC, ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
    children: ReactNode
};

const Container: FC<ContainerProps> = ({ children }) => <div className="Container">{children}</div>;

export default Container;