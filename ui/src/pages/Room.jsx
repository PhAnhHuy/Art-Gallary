import ArtRoom from "../components/ArtRoom.jsx";
import { Icons } from '../components/Icons';
import { IoMdArrowRoundBack } from "react-icons/io";
import {useNavigate} from "react-router-dom";

function Room() {
    const navigate = useNavigate();
    const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    const images = [
        // Front
        { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
        // Back
        { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
        { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
        // Left
        { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
        { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
        { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
        // Right
        { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
        { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
        { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
    ]
    return (
        <div className="h-full flex flex-col justify-start items-start">
            <div className="flex flex-row w-full items-center justify-start gap-5 py-5 px-40">
                <div className='flex flex-row justify-center items-center gap-10'>
                    <IoMdArrowRoundBack
                        className='text-3xl cursor-pointer'
                        onClick={() => navigate('/artworks')}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="text-2xl font-semibold">Exhibition Room</div>
                </div>
            </div>

            <div className="h-[calc(100vh-72px)] w-screen">
                <ArtRoom images={images}/>
            </div>
        </div>
    );
}

export default Room;