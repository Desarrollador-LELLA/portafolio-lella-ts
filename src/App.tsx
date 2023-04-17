import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/paginas/inicio/Inicio';
import Layout from './componentes/paginas/layout/Layout';
import Tester from './componentes/paginas/tester/Tester';
import Error from './componentes/paginas/error/Error';
import SobreMi from './componentes/paginas/sobremi/SobreMi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { getUser } from './redux/actions/authAction';
import { ThunkDispatch } from 'redux-thunk';
import { AuthActions } from './interfaces/IAuth';
import Portafolio from './componentes/paginas/portafolio/Portafolio';
import DetallePortafolio from './componentes/paginas/detalleportafolio/DetallePortafolio';

interface IAppProps {}

const App: FC<IAppProps> = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, null, AuthActions>>();
    const { authenticatedAuth, loadingAuth, usuarioAuth } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            dispatch(getUser());
        };
    }, [dispatch]);

    return (
        <>
            {/* {console.log(authenticatedAuth, loadingAuth, usuarioAuth)} */}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path='sobremi' element={<SobreMi />} />
                    <Route path='portafolio' element={<Portafolio />} />
                    <Route path='detalle/:id' element={<DetallePortafolio />} />
                    <Route path='contacto' element={<Tester />} />
                    {/* RUTAS NO ENCONTRADAS */}
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
