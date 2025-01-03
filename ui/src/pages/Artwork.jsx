import { Icons } from '../components/Icons';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import  Painting  from '../components/Painting.jsx';

function Artwork() {
    const navigate = useNavigate();
    return (
        <section className="h-full flex flex-col justify-start items-start px-40">
            <div className="flex flex-row w-full items-center justify-between py-5 mb-5">
                <div className='flex flex-row justify-center items-center gap-10'>
                <IoMdArrowRoundBack 
                className='text-3xl cursor-pointer'
                onClick={() => navigate('/artists')}
                />
                <h1 className="text-3xl">
                    <span className="relative px-2">
                        Takashi Murakami<Icons.underline
                        className='hidden sm:block pointer-events-none 
                        absolute inset-x-0 -bottom-3 text-amber-500'/>
                    </span>
                </h1>
                </div>
                <div className="flex flex-row justify-center items-center gap-10">
                    <div
                        className="text-2xl cursor-pointer hover:underline"
                        onClick={() => navigate('/about')}>About
                    </div>
                    <button 
                        className="w-24 h-10 flex items-center justify-center bg-black text-white rounded-full text-2xl"
                        onClick={() => navigate('/room')}>View
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-between items-start gap-20 pl-3">
                        <div className='flex flex-col gap-2'>
                        <div className='text-4xl font-semibold'>Timelines</div>
                        <div className='text-xl'>Sold for 2000$</div>
                        </div>

                        <div className='flex justify-center items-center bg-black text-white h-14 w-72 rounded-full'>Buy Now</div>
                    </div>

                    <div className='w-96 h-96 object-cover cursor-pointer'>
                        <Painting/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-between items-start gap-20 pl-3">
                        <div className='flex flex-col gap-2'>
                            <div className='text-4xl font-semibold'>Timelines</div>
                            <div className='text-xl'>Sold for 2000$</div>
                        </div>

                        <div className='flex justify-center items-center bg-black text-white h-14 w-72 rounded-full'>Buy
                            Now
                        </div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                        alt="product"
                        className='w-96 h-96 object-cover cursor-pointer rounded-xl'
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-between items-start gap-20 pl-3">
                        <div className='flex flex-col gap-2'>
                            <div className='text-4xl font-semibold'>Timelines</div>
                            <div className='text-xl'>Sold for 2000$</div>
                        </div>

                        <div className='flex justify-center items-center bg-black text-white h-14 w-72 rounded-full'>Buy
                            Now
                        </div>
                    </div>

                    <img
                        src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                        alt="product"
                        className='w-96 h-96 object-cover cursor-pointer'
                    />
                </div>
            </div>


        </section>
    );
}

export default Artwork;