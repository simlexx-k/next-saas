import './css/styles.css';
import 'flowbite';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from './pages/auth/login.jsx';
import Register from './pages/auth/register.jsx';
import Dashboard from './pages/dashboard.jsx';
import NotFound from "./pages/NotFound.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AuthProvider } from './pages/auth/AuthProvider.jsx'; // Import the AuthProvider component

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider> {/* Wrap your entire application with AuthProvider */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth/login" exact element={<Login />} />
            <Route path="/auth/register" exact element={<Register />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
      <SpeedInsights />
    </div>
  );
}

export default App;
