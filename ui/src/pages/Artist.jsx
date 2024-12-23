import {useNavigate} from "react-router-dom";

function Artist() {
    const navigate = useNavigate();

    return (
            <div className="h-[calc(100vh-80px)] mt-[80px] flex flex-col justify-start items-start px-72">
                <hr className="w-full border-t border-gray-700 my-3 "/>

                <div className="w-full grid grid-cols-3 items-center justify-center">
                    
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                             onClick={() => navigate('/artworks')}
                        />

                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Thang Fly
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default Artist;