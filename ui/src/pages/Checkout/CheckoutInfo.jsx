import { FaArrowLeft, FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import className from 'classnames/bind';
import styles from './checkout.module.css';
import divider from '../../assets/divider.png';

const cx = className.bind(styles);

function CheckoutInfo() {

    const navigate = useNavigate();

    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <div className='h-[50px] w-full flex justify-between pl-8 shadow'>
                    <div className="h-full w-[12%] flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </div>
                    <div className="h-full w-[50%] flex items-center justify-center text-xl font-bold   ">
                        <span>Checkout Information</span>
                    </div>
                </div>
                <div className='h-[calc(100%-50px)] w-full flex'>
                    <div className="h-full w-[50%] flex justify-center items-center p-7">
                        <img 
                        src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                        alt="product"
                        className='h-full object-cover'
                        />
                    </div>
                    <div className="h-full w-[50%] bg-slate-200 py-10 px-20">
                        <div className="flex flex-col justify-between h-[15%]">
                            <div className="text-2xl font-bold">Payment Details</div>
                            <div className="mb-0 font-light text-gray-500">
                                Complete your purchase item by providing your <br/>payment details oder
                            </div>
                        </div>
                        <form 
                            className="h-[80%] flex flex-col justify-start items-center mt-7"
                            onSubmit={(e) => {e.preventDefault(); navigate('/payment')}}
                        >
                            <div className={cx('input-container')}>
                                <label for="email">Email address</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    placeholder="@"
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('input-container')}>
                                <label for="card">Card Detail</label>
                                <input
                                    type='text'
                                    id='card'
                                    name='card'
                                    placeholder="Card Number"
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('input-container')}>
                                <label for="cardHolder">Card Holder</label>
                                <input
                                    type='text'
                                    id='cardHolder'
                                    name='cardHolder'
                                    placeholder="Nguyen Van A"
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('input-container')}>
                                <label for="billingAddress">Billing Address</label>
                                <input
                                    type='text'
                                    id='billingAddress'
                                    name='billingAddress'
                                    placeholder="Ho Chi Minh City"
                                    autoComplete='off'
                                />
                            </div>
                            <div className={cx('form-button')}>
                                <button type="submit">Process Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutInfo;