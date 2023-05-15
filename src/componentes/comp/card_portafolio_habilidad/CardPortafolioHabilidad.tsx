import { FC, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import s from './cardportafoliohabilidad.module.css';
import imagens from '../../imagenes/ic_contacto.svg';
import { IHabilidadesProps } from '../../../interfaces/IBaseDatos';

//'★☆'
const inicial: Array<string> = ['☆', '☆', '☆', '☆', '☆'];

const CardPortafolioHabilidad: FC<IHabilidadesProps> = ({ nombre, imagen, nivel }) => {
   const [estrellas, setEstrellas] = useState<Array<string>>(inicial);

   return (
      <Col xs='auto'>
         <Card bsPrefix={s.card_cardportafoliohabilidad} className={`h-100`} bg={`black`}>
            <Row xs={12}>
               <Col className='mt-2 mb-2 ms-3 p-0' xs={2}>
                  <Card.Img src={imagen} alt={nombre} />
               </Col>
               <Col>
                  <Card.Body className='p-1'>
                     <Card.Text className='m-0 text-center'>{nombre}</Card.Text>
                     <Card.Text className='m-0 text-center'>
                        {estrellas.map((x, _idx) => {
                           if (nivel > _idx) {
                              return '★';
                           }
                           return x;
                        })}
                     </Card.Text>
                  </Card.Body>
               </Col>
            </Row>
         </Card>
      </Col>
   );
};

export default CardPortafolioHabilidad;
