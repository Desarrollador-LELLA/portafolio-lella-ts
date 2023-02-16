import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/paginas/inicio/Inicio';
import Layout from './componentes/paginas/layout/Layout';
import Tester from './componentes/paginas/tester/Tester';
import Error from './componentes/paginas/error/Error';

interface IAppProps { }

const App: FC<IAppProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path='tester' element={<Tester />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
