import { FC, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { IHabilidadesProps } from '../../../interfaces/IBaseDatos';
import ModalVentana from '../modal_ventana/ModalVentana';
import s from './cardhabilidad.module.css';

//'★☆'
const inicial = ['☆', '☆', '☆', '☆', '☆'];

const CardHabilidad: FC<IHabilidadesProps> = ({ id, imagen, nombre, link, nivel, descripcion }) => {
   const [estrellas, setEstrellas] = useState(inicial);
   const [show, setShow] = useState(false);
   const abrirCerrarModal = () => setShow(!show);

   return (
      <>
         <ModalVentana show={show} handleClose={abrirCerrarModal} hablidad={{ id, imagen, nombre, link, nivel, descripcion }} />
         <Col xs='auto'>
            <Card bsPrefix={s.cardhabilidad_inicio} className={`h-100`} bg={`black`} onClick={abrirCerrarModal}>
               <Card.Body>
                  <Card.Img src={imagen} />
                  <Card.Text className='m-0'>{nombre}</Card.Text>
                  <Card.Text className='m-0'>
                     {estrellas.map((x, _idx) => {
                        if (nivel > _idx) {
                           return '★';
                        }
                        return x;
                     })}
                  </Card.Text>
               </Card.Body>
            </Card>
         </Col>
      </>
   );
};

export default CardHabilidad;
