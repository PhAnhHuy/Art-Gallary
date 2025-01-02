import { Icons } from '../components/Icons';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Artwork() {
    const navigate = useNavigate();
    return (
        <section className="h-full flex flex-col justify-start items-start px-72">
            <div className="flex flex-row w-full items-center justify-between py-10">
                <div className='flex flex-row justify-center items-center gap-10'>
                <IoMdArrowRoundBack 
                className='text-3xl cursor-pointer'
                onClick={() => navigate('/artists')}
                />
                <h1 className="text-3xl">
                    <span className="relative px-2">
                        Khanh Nguyen<Icons.underline 
                        className='hidden sm:block pointer-events-none 
                        absolute inset-x-0 -bottom-3 text-amber-500'/>
                    </span>
                </h1>
                </div>
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="text-2xl underline">Artworks</div>
                    <div className="text-2xl cursor-pointer">About</div>
                    <button className="w-24 h-10 flex items-center justify-center bg-black text-white rounded-full text-2xl">View</button>
                </div>
            </div>
            
            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-start items-start gap-5 pl-3">
                        <div>
                        <div className='text-4xl font-semibold'>Timelines</div>
                        <div>Sold for 2000$</div>
                        </div>

                        <div 
                            className='flex justify-center items-center bg-black text-white h-10 w-full rounded-full cursor-pointer'
                            onClick={() => navigate('/checkout')}
                        >
                            Buy Now
                        </div>
                    </div>

                    <img 
                    src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                    alt="product"
                    className='w-72 h-72 object-cover cursor-pointer'
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-start items-start gap-5 pl-3">
                        <div>
                        <div className='text-4xl font-semibold'>Timelines</div>
                        <div>Sold for 2000$</div>
                        </div>

                        <div 
                            className='flex justify-center items-center bg-black text-white h-10 w-full rounded-full cursor-pointer'
                            onClick={() => navigate('/checkout')}
                        >
                            Buy Now
                        </div>
                    </div>

                    <img 
                    src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                    alt="product"
                    className='w-72 h-72 object-cover cursor-pointer'
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center w-full">
                <hr className="border-gray-700"/>

                <div className="flex flex-row justify-between items-start w-full py-5">
                    <div className="flex flex-col justify-start items-start gap-5 pl-3">
                        <div>
                        <div className='text-4xl font-semibold'>Timelines</div>
                        <div>Sold for 2000$</div>
                        </div>

                        <div 
                            className='flex justify-center items-center bg-black text-white h-10 w-full rounded-full cursor-pointer'
                            onClick={() => navigate('/checkout')}
                        >
                            Buy Now
                        </div>
                    </div>

                    <img 
                    src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                    alt="product"
                    className='w-72 h-72 object-cover cursor-pointer'
                    />
                </div>
            </div>

            

        </section>
    );
}

export default Artwork;