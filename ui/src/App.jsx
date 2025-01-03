import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/login';
import Navbar from './components/Navbar';
import Artist from './pages/Artist';
import Home from './pages/Home';
import Artwork from './pages/Artwork';
import Room from './pages/Room';
import About from './pages/About';
import Signup from './pages/Authentication/signup';
import CheckoutInfo from './pages/Checkout/CheckoutInfo';
import Payment from './pages/Checkout/Payment';
import { useState } from 'react';
import Admin from './pages/Admin';

function App() {

    const [user, setUser] = useState('');

    return (  
        <Router>
            <Routes>
                <Route path='/login' element={<Login setUser={setUser} />} />
                <Route path='/room' element={<Room/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/checkout' element={<CheckoutInfo />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/admin' element={<><Navbar user={user}/><Admin /></>} />
                <Route path='/artists' element={<><Navbar user={user}/><Artist/></>} />
                <Route path='/artworks' element={<><Navbar user={user}/><Artwork user={user}/></>} />
                <Route path='/' element={<><Navbar user={user}/><Home/></>} />
            </Routes>
        </Router>
    );
}

export default App;