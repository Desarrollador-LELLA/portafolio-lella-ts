import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Consola from '../../comp/consola/Consola';
import NavHeader from '../../comp/navheader/NavHeader';
import s from './layout.module.css'

interface ILayoutProps { }

const Layout: FC<ILayoutProps> = () => {
    return (
        <>
            <NavHeader />
            <div className={`${s.contenedor_layout}`}>
                <Outlet />
            </div>
            <Consola />
        </>
    );
};

export default Layout;