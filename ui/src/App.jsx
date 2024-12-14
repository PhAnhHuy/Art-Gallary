
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
    return (  
        <>
            <Router>
                <div style={{ width:'100vw', height:'100vh' }}>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;