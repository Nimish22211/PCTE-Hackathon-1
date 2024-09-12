import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Stories from "./Pages/Stories";
import ProtectedRoute from "./Components/ProtectedRoute";
import Write from "./Pages/Write";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/stories" element={<Stories />} />
            <Route path="/write" element={<Write />} />
          </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<LandingPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
