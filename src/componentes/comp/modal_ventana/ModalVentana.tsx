import React, { FC } from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import { IModalsHabilidades } from '../../../interfaces/IModals';
import s from './modalventana.module.css';
//action={() => window.open('url', '_blank')}

const ModalVentana: FC<IModalsHabilidades> = ({ show, handleClose, hablidad }) => {
   const { imagen, nombre, link, nivel, descripcion } = hablidad;
   const estrellas = ['☆', '☆', '☆', '☆', '☆'];

   return (
      <Modal className={`${s.modaldialog_modalventana}`} show={show} onHide={handleClose} backdrop='static' keyboard={false} size='xl'>
         <Modal.Header className={`${s.modalheader_modalventana} p-1`} closeButton>
            <Modal.Title className='text-black'>{nombre}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Row className='justify-content-center'>
               <Col xs='auto' className='text-center' lg={5}>
                  <Image src={imagen} alt={nombre} width='170px' height='170px' />
               </Col>
               <Col xs='auto' lg={7} className='text-center'>
                  <p>Nivel</p>
                  <h1>
                     {estrellas.map((x, _idx) => {
                        if (nivel > _idx) {
                           return '★';
                        }
                        return x;
                     })}
                  </h1>
               </Col>
            </Row>
            <Row>
               <Col>
                  {descripcion?.split('\\n').map((d, _idx) => (
                     <p key={_idx} className={`${s.modaldescripcion_modalventana}`}>
                        {d}
                     </p>
                  ))}
               </Col>
            </Row>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => window.open(link, '_blank')}>Mas Informacion</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default ModalVentana;
