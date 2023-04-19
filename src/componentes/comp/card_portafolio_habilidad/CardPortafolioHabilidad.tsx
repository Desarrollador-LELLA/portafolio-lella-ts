import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import s from './cardportafoliohabilidad.module.css';
import IcGitHub from '../../imagenes/IcGitHub';

interface ICardPortafolioHabilidadProps {}

const CardPortafolioHabilidad: FC<ICardPortafolioHabilidadProps> = () => {
   return (
      <Col xs='auto'>
         <Card bsPrefix={s.card_cardportafoliohabilidad} className={`h-100`} bg={`black`}>
            <Card.Body>
               {/* <Card.Img src={'imagen'} /> */}
               <IcGitHub />
               <Card.Text>{'nombre'}</Card.Text>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default CardPortafolioHabilidad;
