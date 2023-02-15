import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import s from './navheader.module.css'

interface INavHeaderProps { }

const NavHeader: FC<INavHeaderProps> = () => {
    return (
        <>
            <Navbar className={`${s.navbar_navheader} fw-bold`}>
                <Container className='justify-content-center' fluid>
                    <Navbar.Brand href="#home">
                        DESARROLLADOR-LELLA
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>

    );
};

export default NavHeader;