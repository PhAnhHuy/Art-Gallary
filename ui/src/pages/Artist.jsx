import {useNavigate} from "react-router-dom";

function Artist() {
    const navigate = useNavigate();

    return (
            <div className="h-[calc(100vh-80px)] mt-[80px] flex flex-col justify-start items-start px-40">
                <hr className="w-full border-t border-gray-700 my-3 "/>

                <div className="w-full grid grid-cols-3 items-center justify-center">
                    
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROEO2DAlnN7Qt22We1SH7l7T7WB_8ySC7YeEssDizCWs_mnoUdqLzzXaK-BWhzrz4dPnqdnUVe6fbX3j69EJRSmA"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                             onClick={() => navigate('/artworks')}
                        />

                        <div className="text-3xl">
                            Takashi Murakami
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO7qm8XLLSfbZT4qcY2qolaONKS-8C_ijijPAYB8D8swYvt0e9Mo0vEGPb0eaNsN3Iig&usqp=CAU"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Keith Haring
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOlE-TwrHYoKY69wdHVWExVdiwLaoBzs5XdANh0_58y7ap-tdWBfJ8mRELCCc_AnQ9nyasUt-3KDMeTTC4dbk8RA"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Richard Prince
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Makoto_Aida_2012.jpg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Makoto Aida
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlcJZ3GhZD8n7VTx6QHLFfh_kNBQZfkC7DkBDAOk9FDOGC7JLsnglp9mpIBEthhuvfntcKAAkd8qPQCjs3IMOTw"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Cecily Brown
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqABsDCvwOhswMXBiivv-wPGaj2JPbLnby38IyMmAT7-YITAI8l6CMu09mieRcv-rUiomGESj1P_FWoxpuLmmeHg"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Jeff Koons
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center pt-14">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1zW8ZCQFdV2UY2r4dmiLtNQb8cKeRxlqyviq_u5KscOkXpcANfnAeOAnr3NyiO2sXoJJ4aTVtQmH_QE896AeFUQ"
                             alt="avatar pic"
                             className='w-52 h-52 object-cover cursor-pointer'
                        />
                        <div className="text-3xl">
                            Yoshitomo Nara
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default Artist;