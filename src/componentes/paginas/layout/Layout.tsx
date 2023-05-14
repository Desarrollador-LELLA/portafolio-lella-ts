import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../../comp/navheader/NavHeader';
import s from './layout.module.css';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = () => {
   return (
      <>
         <NavHeader />
         <div className={`${s.contenedor_layout} py-2`}>
            <Outlet />
         </div>
      </>
   );
};

export default Layout;
