import { Link, useLocation } from 'react-router-dom';
function Navbar({ user }) {
    const location = useLocation();
    console.log(user);
    
    const admin = (user === 'admin') ? true : false;
    // const [menu, setMenu] = useState('home');
    if (location.pathname === '/artworks' || location.pathname === '/room' || location.pathname === '/about') {
        return null;
    }


    return (
        <nav className="fixed top-0 left-0 right-0 px-40 bg-white">
            <div className="max-w-screen-xl flex justify-between items-center py-5">
                <Link to='/' className='text-2xl font-semibold hover:underline'>
                    Art Gallery
                </Link>
                {user ? (
                    <ul className="flex justify-between items-center gap-20">
                    <li>
                        <Link to='/artists' className='text-2xl hover:underline'>
                            Artists
                        </Link>
                    </li>
                    {admin ? (
                        <li>
                            <Link to='/admin' className='text-2xl hover:underline'>
                                Admin
                            </Link>
                        </li>
                    ) : null}
                    <li>
                        <a href='/' className='text-2xl hover:underline'>
                            Logout
                        </a>
                    </li>
                </ul>
                ) : (
                    <ul className="flex justify-between items-center gap-20">
                    <li>
                        <Link to='/artists' className='text-2xl hover:underline'>
                            Artists
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className='text-2xl hover:underline'>
                            Login
                        </Link>
                    </li>
                </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;