import { FC, ReactNode, FormEvent } from 'react';
import './FormGroup.css';

interface FormGroupProps {
    children: ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const FormGroup: FC<FormGroupProps> = ({ children, onSubmit }): JSX.Element => <form className="FormGroup" onSubmit={onSubmit}>{children}</form>;

export default FormGroup;