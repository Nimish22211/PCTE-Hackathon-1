import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="">
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<LandingPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
