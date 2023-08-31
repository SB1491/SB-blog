import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainPage />}/>
          <Route path="" element={<Navigate to="/main" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
