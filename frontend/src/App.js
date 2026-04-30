import React from 'react';
import './App.css';
import './styles/maar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaarFrames from './components/MaarFrames';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaarFrames />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
