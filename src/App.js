import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import './css/App.css'

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path="/search/:query" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
