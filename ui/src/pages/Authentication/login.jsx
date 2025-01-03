import { FaArrowLeft, FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import divider from '../../assets/divider.png';
import className from 'classnames/bind';
import styles from './authen.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cx = className.bind(styles);

function Login({ setUser }) {

    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ email: '', password: ''});

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        e.target.className = cx('');

        setFormInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('user')

        if ((formInfo.email === 'admin') && formInfo.password === 'admin') {
            setUser('admin')
        }

        navigate('/')
        
    }

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
                            onSubmit={handleSubmit}
                        >
                            <div className={cx('input-container')}>
                                <label for="email">Email address</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    autoComplete='off'
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className={cx('input-container')}>
                                <label for="password">Password</label>
                                <input
                                    type='text'
                                    id='password'
                                    name='password'
                                    autoComplete='off'
                                    onChange={handleFormChange}
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