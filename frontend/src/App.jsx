import './css/styles.css'
import 'flowbite'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home.jsx"
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
// import ProtectedRoute from '../src/ProtectedRoute.jsx'
import Dashboard from './pages/dashboard.jsx'
import NotFound from "./pages/NotFound.jsx"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/auth/login" exact element={<Login/>}/>
                <Route path="/auth/register" exact element={<Register/>}/>
                <Route path="/dashboard" exact element={<Dashboard/>} />
                <Route component={<NotFound/>}/>
            </Routes>
        </Router>
    <SpeedInsights/>
    </div>
  );
  // return ();
}

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"> </script>
export default App
