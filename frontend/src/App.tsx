import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Drawing from './containers/Drawing/Drawing';
import Computer from './containers/Computer/Computer';
import Linguistics from './containers/Linguistics/Linguistics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/linguistics" element={<Linguistics />}/>
          <Route path="/computer" element={<Computer />}/>
          <Route path="/drawing" element={<Drawing />}/>
          <Route path="/main" element={<MainPage />}/>
          <Route path="" element={<Navigate to="/main" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
