import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/login';
import Navbar from './components/Navbar';
import Artist from './pages/Artist';
import Home from './pages/Home';
import Artwork from './pages/Artwork';
import Signup from './pages/Authentication/signup';
import CheckoutInfo from './pages/Checkout/CheckoutInfo';
import Payment from './pages/Checkout/Payment';

function App() {
    return (  
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/checkout' element={<CheckoutInfo />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/artists' element={<><Navbar/><Artist/></>} />
                <Route path='/artworks' element={<><Navbar/><Artwork/></>} />
                <Route path='/' element={<><Navbar/><Home/></>} />
            </Routes>
        </Router>
    );
}

export default App;