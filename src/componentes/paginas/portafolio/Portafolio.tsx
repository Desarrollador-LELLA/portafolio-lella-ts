import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import s from './portafolio.module.css';
import CardPotafolio from '../../comp/card_portafolio/CardPotafolio';

interface IPortafolioProps {}

const Portafolio: FC<IPortafolioProps> = () => {
   return (
      <>
         <Row>
            <h1 className={`${s.text_portafolio} text-center`}>Proyectos</h1>
         </Row>
         <Row xs='auto' className='text-center justify-content-center g-3'>
            <CardPotafolio imagen='' titulo='Titulo 1' descripcion='OrionMusicX is a group project, it is an e-commerce page that offers musical beats.' habilitada={true} />
            <CardPotafolio imagen='' titulo='Titulo 2' descripcion='uno' habilitada={true} />
            <CardPotafolio imagen='' titulo='Titulo 3' descripcion='uno' habilitada={true} />
            <CardPotafolio imagen='' titulo='Titulo 4' descripcion='OrionMusicX is a group project, it is an e-commerce page that offers musical beats.' habilitada={true} />
            <CardPotafolio imagen='' titulo='Titulo 5' descripcion='uno' habilitada={true} />
         </Row>
      </>
   );
};

export default Portafolio;
