<<<<<<< HEAD
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Stories from "./Pages/Stories";
import ProtectedRoute from "./Components/ProtectedRoute";
import Write from "./Pages/Write";
=======
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
>>>>>>> 5c70e827d316065faa1b98cdc5f5f9ec17eca50a

function App() {
  return (
    <div className="">
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/stories" element={<Stories />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
=======
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<LandingPage/>} />
          </Routes>
>>>>>>> 5c70e827d316065faa1b98cdc5f5f9ec17eca50a
      </Router>
    </div>
  );
}

export default App;
