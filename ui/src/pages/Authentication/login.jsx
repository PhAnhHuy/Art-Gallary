import className from 'classnames/bind';
import styles from './authen.module.css';

const cx = className.bind(styles);

function Login() {

    const [formInfor, setFormInfor] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormInfor((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className='h-[calc(100vh-80px)] mt-[80px] flex flex-col items-center justify-center gap-28 bg-sky-100 '>
                <div>
                    Login
                </div>
                <form>
                    <div className={cx('input-container')}>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Username'
                            autoComplete='off'
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <input
                            type='text'
                            id='password'
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;