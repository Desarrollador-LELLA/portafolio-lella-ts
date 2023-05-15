import { FC, RefAttributes, useEffect, useState } from 'react';
import { Badge, Button, Carousel, Col, Image, OverlayTrigger, Row, Tooltip, TooltipProps } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import IcAtras from '../../imagenes/IcAtras';
import s from './detalleportafolio.module.css';
import CardPortafolioHabilidad from '../../comp/card_portafolio_habilidad/CardPortafolioHabilidad';
import { buscaxIdProyecto, setErrorProyectoAction, setLoadingProyectoAction } from '../../../redux/actions/proyectosAction';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../redux/store';
import { ProyectoActions } from '../../../interfaces/IProyecto';
import { IPotafolioProps } from '../../../interfaces/IBaseDatos';
import { useSelector } from 'react-redux';
import Loading from '../../comp/loading/Loading';
import IcGitHub from '../../imagenes/IcGitHub';
import IcMundo from '../../imagenes/IcMundo';

const initial: IPotafolioProps = {
   id: '',
   Estado: { nombre: '', color: '' },
   Imagenes: [],
   Habilidades: [],
   imagen: '',
   titulo: '',
   descripcion: '',
   descripcionCorta: '',
   linkGitHub: '',
   linkWeb: '',
};

interface IDetallePortafolioProps {}

const DetallePortafolio: FC<IDetallePortafolioProps> = () => {
   const { id } = useParams<string>();
   const dispatch = useDispatch<ThunkDispatch<RootState, null, ProyectoActions>>();
   const { loadingProyecto, successProyecto, errorProyecto } = useSelector((state: RootState) => state.proyecto);
   const [proyecto, setProyecto] = useState<IPotafolioProps>(initial);

   useEffect(() => {
      const onUseEffect = async () => {
         await buscaxIdProyecto({
            id: id,
            onLoading: (value) => {
               dispatch(setLoadingProyectoAction(value));
            },
            onError: (msg) => {
               dispatch(setErrorProyectoAction(msg));
            },
            onSuccess: (msg) => {
               setProyecto(msg.resultado);
            },
         });
      };

      onUseEffect();
   }, [dispatch, id]);

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

   return (
      <>
         {loadingProyecto ? (
            <Loading />
         ) : (
            <>
               <Row className='px-3'>
                  <Col xs='auto'>
                     <Link to='/portafolio' className='btn btn-primary'>
                        <IcAtras height='24px' width='24px' />
                     </Link>
                  </Col>
                  <Col>
                     <h1 className={`${s.text_detalleportafolio}`}>{proyecto.titulo}</h1>
                  </Col>
               </Row>
               <Row className={`${s.txt_modalventana} px-3`}>
                  <Col xs='12' md='7'>
                     <Row className='pb-3'>
                        <Col>
                           <Carousel>
                              {proyecto.Imagenes?.map((i) => (
                                 <Carousel.Item>
                                    <Image className='d-block w-100' src={i.link} alt={i.nombre} />
                                    <Carousel.Caption>
                                       <h3>{i.nombre}</h3>
                                    </Carousel.Caption>
                                 </Carousel.Item>
                              ))}
                           </Carousel>
                        </Col>
                     </Row>
                     <Row className='d-none d-md-flex'>
                        <Col className='order-1 order-md-0'>
                           <h5 className={`${s.text_detalleportafolio}`}>Tecnologias Utilizadas</h5>
                           <Row className='justify-content-center g-2'>
                              {proyecto.Habilidades?.map((h) => (
                                 <CardPortafolioHabilidad nombre={h.nombre} imagen={h.imagen} nivel={h.nivel} />
                              ))}
                           </Row>
                        </Col>
                     </Row>
                  </Col>
                  <Col xs='12' md='5' className={`${s.descripcion_detalleportafolio}`}>
                     <Row>
                        <Col>
                           <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipGitHub}>
                              <Button className='me-2' onClick={() => window.open(proyecto.linkGitHub, '_blank')} disabled={proyecto.linkGitHub ? false : true}>
                                 <IcGitHub width='24px' height='24px' />
                              </Button>
                           </OverlayTrigger>
                           <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltipWeb}>
                              <Button className='me-2' onClick={() => window.open(proyecto.linkWeb, '_blank')} disabled={proyecto.linkWeb ? false : true}>
                                 <IcMundo width='24px' height='24px' />
                              </Button>
                           </OverlayTrigger>
                        </Col>
                     </Row>
                     <Row className='mt-2'>
                        <Col>
                           <h5 className={`${s.text_detalleportafolio}`}>Informacion</h5>
                           <p>{proyecto.descripcionCorta}</p>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <h4 className='text-center'>
                              <Badge bg={`none`} style={{ backgroundColor: proyecto.Estado.color }}>
                                 {proyecto.Estado.nombre}
                              </Badge>
                           </h4>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <h5 className={`${s.text_detalleportafolio}`}>Descripcion</h5>
                           {proyecto.descripcion?.split('\\n').map((d, _idx) => (
                              <p key={_idx}>{d}</p>
                           ))}
                        </Col>
                     </Row>
                     <Row className='d-flex d-md-none'>
                        <Col>
                           <h5 className={`${s.text_detalleportafolio}`}>Tecnologias Utilizadas</h5>
                           <Row className='justify-content-center g-2'>
                              {proyecto.Habilidades?.map((h) => (
                                 <CardPortafolioHabilidad nombre={h.nombre} imagen={h.imagen} nivel={h.nivel} />
                              ))}
                           </Row>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </>
         )}
      </>
   );
};

export default DetallePortafolio;
