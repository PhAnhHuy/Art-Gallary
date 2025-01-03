import { FaArrowLeft, FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import divider from '../../assets/divider.png';
import className from 'classnames/bind';
import styles from './authen.module.css';
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

function Login() {

    const navigate = useNavigate();

    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <div className='h-[50px] w-full flex justify-between px-8 shadow'>
                    <div className="h-full w-[12%] flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </div>
                    <div className="h-full w-[12%] flex items-center gap-2 cursor-pointer" onClick={() => navigate('/signup')}>
                        <span>Create an account</span>
                    </div>
                </div>
                <div className='h-[calc(100%-50px)] w-full flex flex-col items-center'>
                    <div className={cx('title')}>
                        <svg height="40%" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <circle r="18" cx="50%" cy="50%" fill="#bababa" />
                        </svg>
                        <span>Log in</span>
                    </div>
                    <div className={cx('content-wrapper')}>
                        <form 
                            className="h-full w-[25%] flex flex-col justify-center items-center"
                            onSubmit={(e) => {e.preventDefault(); navigate('/')}}
                        >
                            <div className={cx('input-container')}>
                                <label for="email">Email address</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('input-container')}>
                                <label for="password">Password</label>
                                <input
                                    type='text'
                                    id='password'
                                    name='password'
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('form-button')}>
                                <button type="submit">Log in</button>
                            </div>
                        </form>
                        <img src={divider} alt="" className="h-full"/>
                        <div className="h-full w-[25%] flex flex-col justify-center items-center">
                            <button className={cx('login-with-button')}>
                                <FaGoogle />
                                Continue with Google
                            </button>
                            <button className={cx('login-with-button')}>
                                <FaFacebook />
                                Continue with Facebook
                            </button>
                            <button className={cx('login-with-button')}>
                                <IoMdMail />
                                Sign up with email
                            </button>
                        </div>
                    </div>
                    <div className="h-[15%] flex flex-col items-center justify-between">
                        <div className="underline mt-2">Can't log in?</div>
                        <div className="flex flex-col">
                            <div className="mx-auto text-sm">
                                Secure Login with reCAPTCHA subject to
                            </div>
                            <div className="mx-auto text-sm">
                                Google Terms & Privacy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;