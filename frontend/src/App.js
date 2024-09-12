import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './Pages/Login';

function App() {
  return (
    <div className="">
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
