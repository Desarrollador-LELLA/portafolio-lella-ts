import React, { FC } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from './consola.module.css'

interface IConsolaProps { }

const Consola: FC<IConsolaProps> = () => {
    return (
        <Navbar className={`${s.contenedor_consola}`}>
            <Container fluid>
                
            </Container>
        </Navbar>
    );
};

export default Consola;