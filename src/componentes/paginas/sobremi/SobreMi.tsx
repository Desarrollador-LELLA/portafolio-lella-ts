import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardRedes from '../../comp/card_redes/CardRedes';
import s from './sobremi.module.css'
import icTester from '../../imagenes/ic_sobre.svg'

interface ISobreMiProps { }

const SobreMi: FC<ISobreMiProps> = () => {
    return (
        <>
            <Row className='px-3'>
                <Col>
                    <h1 className={`${s.text_sobremi}`}>Sobre Mi</h1>
                    <p className={`${s.text_sobremi}`}>Soy un desarrollador Full Stack ubicado en Chile. Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.</p>
                    <p className={`${s.text_sobremi}`}>Persona bien organizada, solucionador de problemas, empleado independiente con gran atención a los detalles.</p>
                    <p className={`${s.text_sobremi}`}>Aficionado a las MMA, las actividades al aire libre y las series de TV. Una persona de familia y padre soltero de tres niños rebeldes.</p>
                    <p className={`${s.text_sobremi}`}>Interesado en todo el espectro frontend, backend, Android y trabajando en proyectos ambiciosos con personas positivas.</p>
                </Col>
            </Row>
            <Row className='px-3'>
                <h1 className={`${s.text_sobremi}`}>Mis Habilidades</h1>
            </Row>
            <Row xs='auto' className='text-center justify-content-center g-3'>
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            <CardRedes id={0} nombre={''} urlRed={'#sin'} imagen={icTester} />
            </Row>
        </>
    );
};

export default SobreMi;