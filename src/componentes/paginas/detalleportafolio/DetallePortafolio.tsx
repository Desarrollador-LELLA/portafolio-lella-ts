import { FC } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import IcAtras from '../../imagenes/IcAtras';
import s from './detalleportafolio.module.css';
import CardPortafolioHabilidad from '../../comp/card_portafolio_habilidad/CardPortafolioHabilidad';

interface IDetallePortafolioProps {}

const DetallePortafolio: FC<IDetallePortafolioProps> = () => {
   const { id } = useParams();

   return (
      <>
         <Row className='px-3'>
            <Col xs='auto'>
               <Link to='/portafolio' className='btn btn-primary'>
                  <IcAtras height='24px' width='24px' />
               </Link>
            </Col>
            <Col>
               <h1 className={`${s.text_detalleportafolio}`}>Titulo del Proyecto</h1>
            </Col>
         </Row>
         <Row xs='12' className={`${s.txt_modalventana} px-3`}>
            <Col xs='12' sm='5'>
               <Carousel>
                  <Carousel.Item>
                     <img className='d-block w-100' src='https://clubdeltrade.com/wp-content/uploads/2019/01/Como_definir_o_mix_de_produtos_ideal.png' alt='First slide' />
                     {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className='d-block w-100' src='https://staminamarketing.com/blog/wp-content/uploads/2020/06/tipos-de-productos-woocommerce.jpg' alt='Second slide' />

                     {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className='d-block w-100' src='https://cdn.abcdoabc.com.br/mix-produtos_90f03d1f.jpg' alt='Third slide' />

                     {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption> */}
                  </Carousel.Item>
               </Carousel>
            </Col>
            <Col xs='12' sm='7' className={`${s.descripcion_detalleportafolio}`}>
               <p>
                  REACT NATIVE ES UN FRAMEWORK JAVASCRIPT PARA CREAR APLICACIONES REALES NATIVAS PARA IOS Y ANDROID, BASADO EN LA LIBREARÍA DE JAVASCRIPT REACT PARA LA CREACIÓN DE COMPONENTES VISUALES, CAMBIANDO EL PROPÓSITO DE LOS MISMOS PARA, EN LUGAR DE SER EJECUTADOS EN NAVEGADOR, CORRER DIRECTAMENTE SOBRE LAS PLATAFORMAS MÓVILES NATIVAS, EN ESTE CASO IOS Y ANDORID. ES DECIR, EN LUGAR DE
                  DESARROLLAR UNA APLICACIÓN WEB HÍBRIDA O EN HTML5, LO QUE OBTIENES AL FINAL COMO RESULTADO ES UNA APLICACIÓN REAL NATIVA, INDISTINGUIBLE DE LA QUE PODRÍAS DESARROLLAR CON TU CÓDIGO EN OBJECTIVE-C O JAVA.
               </p>
            </Col>
         </Row>
         <Row>
            <Col>
               <CardPortafolioHabilidad />
            </Col>
         </Row>
      </>
   );
};

export default DetallePortafolio;
