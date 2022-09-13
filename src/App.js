
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Videos from './Videos.js';
import Images from './Images';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Images />} />
            <Route path='/videos' element={<Videos />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
