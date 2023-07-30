import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path="/search/:query" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
