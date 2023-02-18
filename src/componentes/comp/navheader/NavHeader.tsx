import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import s from './navheader.module.css'
import icInicio from '../../imagenes/ic_inicio.svg'
import icPortafolio from '../../imagenes/ic_portafolio.svg'
import icContacto from '../../imagenes/ic_contacto.svg'
import icSobre from '../../imagenes/ic_sobre.svg'

interface INavHeaderProps { }

const NavHeader: FC<INavHeaderProps> = () => {
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
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/'><img src={icInicio} alt='Inicio'/></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/sobremi'><img src={icSobre} alt='Sobre Mi'/><span>Sobre Mi</span></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/portafolio'><img src={icPortafolio} alt='Mi Portafolio'/><span>Portafolio</span></NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={`nav-link`} to='/contacto'><img src={icContacto} alt='Contacto'/><span>Contacto</span></NavLink>
                </Nav.Item>
            </Nav>
        </>

    );
};

export default NavHeader;