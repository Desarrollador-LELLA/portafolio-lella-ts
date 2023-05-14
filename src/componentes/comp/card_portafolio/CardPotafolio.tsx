import { FC, RefAttributes } from 'react';
import s from './cardportafolio.module.css';
import { Button, Card, Col, OverlayTrigger, Tooltip, TooltipProps } from 'react-bootstrap';
import IcDetalle from '../../imagenes/IcDetalle';
import IcGitHub from '../../imagenes/IcGitHub';
import IcMundo from '../../imagenes/IcMundo';
import { Link } from 'react-router-dom';
import { IPotafolioProps } from '../../../interfaces/IBaseDatos';

const CardPotafolio: FC<IPotafolioProps> = ({ imagen, titulo, descripcion, linkGithub, linkWeb, habilitada }) => {
   const onClickDetalle = () => {};

   const renderTooltipGitHub = (props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
      <Tooltip id='button-tooltip' {...props}>
         Visitar Git Hub
      </Tooltip>
   );

   const renderTooltipWeb = (props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
      <Tooltip id='button-tooltip' {...props}>
         Visitar Sito Web
      </Tooltip>
   );

   const renderTooltipDetalles = (props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
      <Tooltip id='button-tooltip' {...props}>
         Ver Detalles
      </Tooltip>
   );

   return (
      <>
         <Col xs='auto'>
            <Card bsPrefix={s.cardportafolio_portafolio} className={`h-100`} bg={`black`}>
               <Card.Body>
                  <Card.Img src={'https://portafolio-two-pink.vercel.app/static/media/Rick-And-Morty-app.b2982fbd8356014926b9.png'} />
                  <Card.Title>{titulo}</Card.Title>
                  <Card.Text>{descripcion}</Card.Text>
               </Card.Body>
               <Card.Footer>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipGitHub}>
                     <Button className='me-2'>
                        <IcGitHub width='24px' height='24px' />
                     </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipWeb}>
                     <Button className='me-2'>
                        <IcMundo width='24px' height='24px' />
                     </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipDetalles}>
                     <Link className={`btn btn-primary`} to={`/detalle/${101}`}>
                        <IcDetalle width='24px' height='24px' />
                     </Link>
                  </OverlayTrigger>
               </Card.Footer>
            </Card>
         </Col>
      </>
   );
};

export default CardPotafolio;
