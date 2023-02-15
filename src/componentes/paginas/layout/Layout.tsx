import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../../comp/navheader/NavHeader';

interface ILayoutProps { }

const Layout: FC<ILayoutProps> = () => {
    return (
        <>
            <NavHeader />
            <Outlet />
        </>
    );
};

export default Layout;