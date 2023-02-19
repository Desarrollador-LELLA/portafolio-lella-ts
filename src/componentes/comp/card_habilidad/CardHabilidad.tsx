import React, { FC, useState } from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IHabilidades } from '../../../interfaces/IBaseDatos';
import s from './cardhabilidad.module.css'

//'★☆'
const inicial = ['☆', '☆', '☆', '☆', '☆']

const CardHabilidad: FC<IHabilidades> = ({ id, imagen, nombre, url, nivel }) => {

    const [estrellas, setEstrellas] = useState(inicial)

    return (
        <>
            <Col xs='auto'>
                <Card bsPrefix={s.cardhabilidad_inicio} className={`h-100`} bg={`black`} onClick={() => window.open(url, '_blank')}>
                    <Card.Body>
                        <Card.Img src={imagen} />
                        <Card.Text className='m-0'>{nombre}</Card.Text>
                        <Card.Text className='m-0'>
                            {
                                estrellas.map((x, _idx) => {
                                    if(nivel > _idx){
                                        return '★'
                                    }
                                    return x
                                })
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardHabilidad;