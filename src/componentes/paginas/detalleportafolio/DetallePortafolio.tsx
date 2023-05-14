import { FC, useEffect, useState } from 'react';
import { Badge, Carousel, Col, Image, Row } from 'react-bootstrap';
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
      // if (idX) {
      // }
   }, [dispatch, id]);

   return (
      <>
         {console.log(proyecto)}
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
               <Row xs='12' className={`${s.txt_modalventana} px-3`}>
                  <Col xs='12' md='7'>
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
                  <Col xs='12' md='5' className={`${s.descripcion_detalleportafolio}`}>
                     <Row>
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
                           <p>{proyecto.descripcion}</p>
                        </Col>
                     </Row>
                     <Row>
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
