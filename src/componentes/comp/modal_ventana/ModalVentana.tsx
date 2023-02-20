import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IModalsHabilidades } from '../../../interfaces/IModals';
import s from './modalventana.module.css';
//action={() => window.open('url', '_blank')}

const ModalVentana: FC<IModalsHabilidades> = ({ show, handleClose, hablidad }) => {

    const { id, imagen, nombre, url, nivel } = hablidad;

    return (
        <Modal className={`${s.modaldialog_modalventana}`} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header className={`${s.modalheader_modalventana} p-1`} closeButton>
                <Modal.Title className='text-black'>{nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                En Construccion
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
                {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalVentana;