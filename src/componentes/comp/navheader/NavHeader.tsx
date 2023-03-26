import React, { FC, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Alert, NavItem, Image, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import s from './navheader.module.css';
import icMenu from '../../imagenes/ic_menu.svg';
import icInicio from '../../imagenes/ic_inicio.svg';
import icPortafolio from '../../imagenes/ic_portafolio.svg';
import icContacto from '../../imagenes/ic_contacto.svg';
import icSobre from '../../imagenes/ic_sobre.svg';
import icEntrar from '../../imagenes/ic_entrar.svg';
import { registraEntraGoogleAction, salirAction } from '../../../redux/actions/authAction';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../redux/store';
import { AuthActions } from '../../../interfaces/IAuth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface INavHeaderProps {}

const NavHeader: FC<INavHeaderProps> = () => {
    const { loadingAuth, authenticatedAuth, usuarioAuth } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<ThunkDispatch<RootState, null, AuthActions>>();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);

    const onClickEntrar = (e: React.BaseSyntheticEvent) => {
        const elemento = e.currentTarget.getElementsByTagName('span');
        if (elemento[0].innerText === 'Salir') {
            dispatch(salirAction());
        } else {
            dispatch(registraEntraGoogleAction());
        }
    };

    return (
        <>
            <Navbar className={`${s.navbar_navheader} fw-bold`}>
                <Container className='justify-content-center' fluid>
                    <Link className={`${s.navtitle_navheader}`} to='/'>
                        DESARROLLADOR-LELLA
                    </Link>
                </Container>
            </Navbar>
            <Nav className={`${s.nav_navheader}`} onSelect={(selectedKey) => alert(`selected ${selectedKey} Esto se esta Construyendo`)}>
                <Nav.Item className='d-sm-none' onClick={handleClose}>
                    <img className='nav-link' src={icMenu} alt='Menu' />
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/'>
                        <img src={icInicio} alt='Inicio' />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/sobremi'>
                        <img src={icSobre} alt='Sobre Mi' />
                        <span className={`${s.navsobre_navheader}`}>Sobre Mi</span>
                    </NavLink>
                </Nav.Item>
                <Offcanvas show={show} onHide={handleClose} responsive='sm'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className=''>
                        <Nav.Item>
                            <NavLink className={`nav-link`} to='/portafolio' onClick={() => setShow(false)}>
                                <img src={icPortafolio} alt='Mi Portafolio' />
                                <span className={`${s.navportafolio_navheader}`}>Portafolio</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={`nav-link`} to='/contacto' onClick={() => setShow(false)}>
                                <img src={icContacto} alt='Contacto' />
                                <span>Contacto</span>
                            </NavLink>
                        </Nav.Item>
                    </Offcanvas.Body>
                </Offcanvas>
                <Nav.Item className='m-auto'></Nav.Item>
                <Nav.Item className='justify-content-end'>
                    <Button variant='none' onClick={onClickEntrar} disabled={loadingAuth} id='idedelelemento'>
                        {loadingAuth ? (
                            <Spinner animation='grow' variant='success' />
                        ) : (
                            <>
                                <Image src={authenticatedAuth ? (usuarioAuth?.imagen ? usuarioAuth?.imagen : icContacto) : icEntrar} width='36px' height='36px' roundedCircle />
                                <span className={`${s.naventrar_navheader}`}>{authenticatedAuth ? 'Salir' : 'Entrar'}</span>
                            </>
                        )}
                    </Button>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default NavHeader;
