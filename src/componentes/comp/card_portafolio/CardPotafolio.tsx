import { FC, RefAttributes } from 'react';
import s from './cardportafolio.module.css';
import { Badge, Button, Card, Col, OverlayTrigger, Tooltip, TooltipProps } from 'react-bootstrap';
import IcDetalle from '../../imagenes/IcDetalle';
import IcGitHub from '../../imagenes/IcGitHub';
import IcMundo from '../../imagenes/IcMundo';
import { Link } from 'react-router-dom';
import { IPotafolioProps } from '../../../interfaces/IBaseDatos';

const CardPotafolio: FC<IPotafolioProps> = ({ id, Estado, imagen, titulo, descripcionCorta, linkGitHub, linkWeb }) => {
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
                  <Card.Img src={imagen} />
                  <Card.Title>{titulo}</Card.Title>
                  <Badge bg={`none`} style={{ backgroundColor: Estado.color }}>
                     {Estado.nombre}
                  </Badge>
                  <Card.Text>{descripcionCorta}</Card.Text>
               </Card.Body>
               <Card.Footer>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipGitHub}>
                     <Button className='me-2' onClick={() => window.open(linkGitHub, '_blank')} disabled={linkGitHub ? false : true}>
                        <IcGitHub width='24px' height='24px' />
                     </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipWeb}>
                     <Button className='me-2' onClick={() => window.open(linkWeb, '_blank')} disabled={linkWeb ? false : true}>
                        <IcMundo width='24px' height='24px' />
                     </Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipDetalles}>
                     <Link className={`btn btn-primary`} to={`/detalle/${id}`}>
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
