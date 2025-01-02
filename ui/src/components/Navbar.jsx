import { useLocation } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    const user = true;
    const admin = true;
    // const [menu, setMenu] = useState('home');
    if (location.pathname === '/artworks') {
        return null;
    }


    return (
        <nav className="fixed top-0 left-0 right-0 px-40 bg-white">
            <div className="max-w-screen-xl flex justify-between items-center py-5">
                <a href='/' className='text-2xl font-semibold hover:underline'>
                    Art Gallery
                </a>
                {user ? (
                    <ul className="flex justify-between items-center gap-20">
                    <li>
                        <a href='/artists' className='text-2xl hover:underline'>
                            Artists
                        </a>
                    </li>
                    {admin ? (
                        <li>
                            <a href='/admin' className='text-2xl hover:underline'>
                                Admin
                            </a>
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
                        <a href='/artists' className='text-2xl hover:underline'>
                            Artists
                        </a>
                    </li>
                    <li>
                        <a href='/login' className='text-2xl hover:underline'>
                            Login
                        </a>
                    </li>
                </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;