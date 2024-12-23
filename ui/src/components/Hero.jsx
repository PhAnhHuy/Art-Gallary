import hand_icon from '../assets/hand_icon.png';
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="h-[calc(100vh-80px)] mt-[80px] px-72 flex flex-row items-center justify-between">
            <div className="flex flex-col gap-5 justify-center">
                <div>
                    <div className='flex items-center gap-5'>
                        <p className='font-medium text-7xl'>Welcome</p>
                        <img src={hand_icon} alt="" className='w-20'/>
                    </div>
                    <p className='font-medium text-7xl'>
                        Our Art Gallery 
                    </p>
                </div>
                <div onClick={() => navigate('/artists')} className='flex flex-row justify-center items-center gap-3 h-14 rounded-full bg-black text-white text-xl cursor-pointer'>
                    <div>Explore now</div>
                    <MdArrowOutward/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg" alt="" className='w-[300px]'/>
            </div>
        </div>
    );
}

export default Hero;