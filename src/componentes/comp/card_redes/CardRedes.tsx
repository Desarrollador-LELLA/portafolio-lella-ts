import React, { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import { IRedProps } from '../../../interfaces/IBaseDatos';
import s from './cardredes.module.css'

const CardRedes: FC<IRedProps> = ({ id, imagen, nombre, link }) => {
    return (
        <Col xs='auto'>
            <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open(link, '_blank')}>
                <Card.Body>
                    <Card.Img src={imagen} />
                    <Card.Text>{nombre}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardRedes;