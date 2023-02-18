import React, { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import { IRedes } from '../../../interfaces/IBaseDatos';
import s from './cardredes.module.css'

const CardRedes: FC<IRedes> = ({ id, imagen, nombre, urlRed }) => {
    return (
        <Col xs='auto'>
            <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open(urlRed, '_blank')}>
                <Card.Body>
                    <Card.Img src={imagen} />
                    <Card.Text>{nombre}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardRedes;