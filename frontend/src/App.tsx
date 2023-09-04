import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Drawing from './containers/Drawing/Drawing';
import Computer from './containers/Computer/Computer';
import Linguistics from './containers/Linguistics/Linguistics';
import ComputerDetailPage from './containers/ComputerDetailPage/ComputerDetailPage';
import LinguisticsDetailPage from './containers/LinguisticsDetailPage/LinguisticsDetailPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/linguistics" element={<Linguistics />}/>
            <Route path="/computer" element={<Computer />}/>
            <Route path="/drawing" element={<Drawing />}/>
            <Route path="/computer/:id" element={<ComputerDetailPage />}/>
            <Route path="/linguistics/:id" element={<LinguisticsDetailPage />}/>
            <Route path="/main" element={<MainPage />}/>
            <Route path="" element={<Navigate to="/main" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
