import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Artist from './pages/Artist';
import Home from './pages/Home';
import Artwork from './pages/Artwork';
import Room from './pages/Room';

function App() {
    return (  
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home/>} />
                <Route path='/artists' element={<Artist/>} />
                <Route path='/artworks' element={<Artwork/>} />
                <Route path='/room' element={<Room/>} />
            </Routes>
        </Router>
    );
}

export default App;