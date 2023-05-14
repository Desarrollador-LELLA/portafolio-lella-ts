import { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import s from './cardportafoliohabilidad.module.css';

interface ICardPortafolioHabilidadProps {}

const CardPortafolioHabilidad: FC<ICardPortafolioHabilidadProps> = () => {
   return (
      <Col xs='auto'>
         <Card bsPrefix={s.card_cardportafoliohabilidad} className={`h-100`} bg={`black`}>
            <Card.Body>
               <Card.Img src={'imagen'} />
               <Card.Text>{'nombre'}</Card.Text>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default CardPortafolioHabilidad;
