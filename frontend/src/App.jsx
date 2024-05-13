import './css/styles.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
import NotFound from "./pages/NotFound.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/auth/login" exact element={<Login/>}/>
                <Route path="/auth/register" exact element={<Register/>}/>
                <Route component={<NotFound/>}/>
            </Routes>
        </Router>
    <SpeedInsights/>
    </div>
  );
  // return ();
}

export default App
