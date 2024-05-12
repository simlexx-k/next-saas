import './css/styles.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from './pages/auth/login'
import Register from './pages/auth/register'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/auth/login" exact element={<Login/>}/>
                <Route path="/auth/register" component={Register}/>
            </Routes>
        </Router>

    </div>
  );
  // return ();
}

export default App
