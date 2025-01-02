import { FaArrowLeft, FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import className from 'classnames/bind';
import styles from './checkout.module.css';
import { useState } from "react";

const cx = className.bind(styles);

function Payment() {

    const navigate = useNavigate();
    const [total, setTotal] = useState(1000);
    const [voucher, setVoucher] = useState(false);

    const handleVoucher = (e) => {
        e.preventDefault();
        setVoucher(prev => true);
        setTotal(1000-1)
    }

    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <div className='h-[50px] w-full flex justify-between pl-8 shadow'>
                    <div className="h-full w-[12%] flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </div>
                    <div className="h-full w-[50%] flex items-center justify-center text-xl font-bold   ">
                        <span>Process Payment</span>
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
                        <div className="flex flex-col justify-between h-[5%]">
                            <div className="text-2xl font-bold">Process Payment</div>
                        </div>
                        <form 
                            className="h-[15%] flex justify-start mt-7"
                            onSubmit={handleVoucher}
                        >
                            <div className={cx('input-container')} style={{ height: '80%' }}>
                                <label for="email">Apply Voucher</label>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    autoComplete='off'
                                />
                            </div>
                            <div 
                                className={cx('form-button')}
                                style={{
                                    marginTop: '5%',
                                    width: '40%',
                                    height: '50%'
                                }}
                            >
                                <button type="submit">Apply</button>
                            </div>
                        </form>
                        <div className="h-[1px] border-b-black border-b border-solid mb-5"></div>
                        <div className="flex flex-col justify-start h-[10%]">
                            <div className="flex justify-between">
                                <span>Painting</span>
                                <span>{total}$</span>
                            </div>
                            <div className="flex justify-between">
                                {voucher ? (<><span>Voucher</span>
                                <span>-1$</span></>) : (<></>)}
                            </div>
                        </div>
                        <div className="h-[1px] border-b-black border-b border-solid mb-2"></div>
                        <div className="flex flex-col justify-start h-[10%]">
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>{total}$</span>
                            </div>
                        </div>
                        <form onSubmit={(e) => {e.preventDefault(); navigate('/')}}>
                            <div className={cx('form-button')} style={{ height:'50px'}}>
                                <button type="submit">Complete Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;