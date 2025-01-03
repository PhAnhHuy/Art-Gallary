import  Painting  from '../components/Painting.jsx';

function Admin() {
    return (
        <>
            <section className="h-[calc(100vh-80px)] mt-[80px] flex flex-col justify-start items-start px-40">
                <div className="flex flex-col justify-center w-full">
                    <hr className="border-gray-700"/>

                    <div className="flex flex-row justify-start items-start gap-5 w-full py-5">
                        <button className='border-2 border-slate-800 border-solid rounded-md bg-slate-900 text-white p-5'>
                            Add Artworks
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full">
                    <hr className="border-gray-700"/>

                    <div className="flex flex-row justify-between items-start w-full py-5">
                        <div className="flex flex-col justify-between items-start gap-20 pl-3">
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <div className='text-3xl font-semibold'>Takashi Murakami</div>
                                </div>
                                <div className='text-xl'>Sold for 2000$</div>
                            </div>
                            <button className='border-2 border-slate-800 border-solid rounded-md p-5'>
                                Remove Artworks
                            </button>
                        </div>

                        <div className='w-60 h-60 object-cover cursor-pointer'>
                            <Painting/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full">
                    <hr className="border-gray-700"/>

                    <div className="flex flex-row justify-between items-start w-full py-5">
                        <div className="flex flex-col justify-between items-start gap-20 pl-3">
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <div className='text-3xl font-semibold'>Keith Haring</div>
                                </div>
                                <div className='text-xl'>Sold for 2000$</div>
                            </div>
                            <button className='border-2 border-slate-800 border-solid rounded-md p-5'>
                                Remove Artworks
                            </button>
                        </div>

                        <img
                            src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                            alt="product"
                            className='w-60 h-60 object-cover cursor-pointer rounded-xl'
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full">
                    <hr className="border-gray-700"/>

                    <div className="flex flex-row justify-between items-start w-full py-5">
                        <div className="flex flex-col justify-between items-start gap-20 pl-3">
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <div className='text-3xl font-semibold'>Makoto Aida</div>
                                </div>
                                <div className='text-xl'>Sold for 2000$</div>
                            </div>
                            <button className='border-2 border-slate-800 border-solid rounded-md p-5'>
                                Remove Artworks
                            </button>
                        </div>

                        <img
                            src="https://framerusercontent.com/images/hGcgaav51aAjkVOcOh5R0OozPUA.jpg"
                            alt="product"
                            className='w-60 h-60 object-cover cursor-pointer'
                        />
                    </div>
                </div>


            </section>
        </>
    );
}

export default Admin;