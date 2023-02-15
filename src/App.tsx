import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/paginas/layout/Layout';
import Tester from './componentes/paginas/tester/Tester';

interface IAppProps { }

const App: FC<IAppProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Tester />} />
      </Route>
    </Routes>
  );
};

export default App;
