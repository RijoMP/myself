// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './layout/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;