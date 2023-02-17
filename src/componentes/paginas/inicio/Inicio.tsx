import React, { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import s from './inicio.module.css'
import icFacebook from '../../imagenes/ic_facebook.svg'
import icGithub from '../../imagenes/ic_github.svg'
import icLinkedin from '../../imagenes/ic_linkedin.svg'
import icTiktok from '../../imagenes/ic_tiktok.svg'
import icYoutube from '../../imagenes/ic_youtube.svg'

interface IInicioProps { }

const Inicio: FC<IInicioProps> = () => {

    const navegar = useNavigate();

    return (
        <>
            <Row xs='auto' className='text-center justify-content-center'>
                <Col>
                    <h1 className={`${s.text_inicio}`}>Hola, Soy Luis</h1>
                    <h3 className={`${s.text_inicio}`}>Desarrollador Full Stack</h3>
                    <h5 className={`${s.text_inicio}`}>Front End - Back End</h5>
                    <h6 className={`${s.text_inicio}`}>App Android - Web</h6>
                </Col>
            </Row>
            <Row xs='auto' className='text-center justify-content-center'>
                <h1 className={`${s.text_inicio}`}>Mis Redes</h1>
            </Row>
            <Row xs='auto' className='text-center justify-content-center g-3'>
                <Col xs='auto'>
                    <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open('https://github.com/Desarrollador-LELLA', '_blank')}>
                        <Card.Body>
                            {/* <Link to={'https://github.com/Desarrollador-LELLA'} target='_blank'>GIT</Link> */}
                            <Card.Img src={icGithub} />
                            <Card.Text>GIT</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='auto'>
                <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open('https://www.linkedin.com/in/luisestebanllancamilaguilera', '_blank')}>
                        <Card.Body>
                            {/* <Link to={'https://www.linkedin.com/in/luisestebanllancamilaguilera/'} target='_blank'>LINKEDIN</Link> */}
                            <Card.Img src={icLinkedin} />
                            <Card.Text>LINKEDIN</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='auto'>
                <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open('https://www.tiktok.com/@luisestebanllan32', '_blank')}>
                        <Card.Body>
                            {/* <Link to={'https://www.tiktok.com/@luisestebanllan32'} target='_blank'>TIKTOK</Link> */}
                            <Card.Img src={icTiktok} />
                            <Card.Text>TIKTOK</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='auto'>
                <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open('https://www.facebook.com/luisesteban.llancamilaguilera', '_blank')}>
                        <Card.Body>
                            {/* <Link to={'https://www.facebook.com/luisesteban.llancamilaguilera'} target='_blank'>FACEBOOK</Link> */}
                            <Card.Img src={icFacebook} />
                            <Card.Text>FACEBOOK</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='auto'>
                <Card bsPrefix={s.cardredes_inicio} className={`h-100`} bg={`black`} onClick={() => window.open('https://www.youtube.com/@mipymelella', '_blank')}>
                        <Card.Body>
                            {/* <Link to={'https://www.youtube.com/@mipymelella'} target='_blank'>YOUTUBE</Link> */}
                            <Card.Img src={icYoutube} />
                            <Card.Text>YOUTUBE</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Inicio;