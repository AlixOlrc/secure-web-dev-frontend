import './WebApp.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import LocationPage from './pages/Location.jsx';
import {useEffect} from "react";

function WebApp() {

  return (
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/location" element={<LocationPage/>} />

            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default WebApp;