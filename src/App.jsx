import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

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
