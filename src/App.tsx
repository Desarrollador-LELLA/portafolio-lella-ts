import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/paginas/inicio/Inicio';
import Layout from './componentes/paginas/layout/Layout';
import Tester from './componentes/paginas/tester/Tester';
import Error from './componentes/paginas/error/Error';
import SobreMi from './componentes/paginas/sobremi/SobreMi';

interface IAppProps { }

const App: FC<IAppProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path='sobremi' element={<SobreMi />} />
        <Route path='portafolio' element={<Tester />} />
        <Route path='contacto' element={<Tester />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
