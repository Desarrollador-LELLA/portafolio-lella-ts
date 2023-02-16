import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import s from './inicio.module.css'

interface IInicioProps { }

const Inicio: FC<IInicioProps> = () => {
    return (
        <Container fluid>
            <h1 className={`${s.text_inicio}`}>Hola, Soy Luis</h1>
            <h3 className={`${s.text_inicio}`}>Desarrollador Full Stack</h3>
            <h5 className={`${s.text_inicio}`}>Front End - Back End</h5>
            <h6 className={`${s.text_inicio}`}>App Android - Web</h6>
        </Container>
    );
};

export default Inicio;