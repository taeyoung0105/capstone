import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Login from './components/pages/login/Login';

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
