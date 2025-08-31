
function Footer() {

    return (
        <>
            <div className="bg-[url('https://solarsaver.vercel.app/assets/before-slider-5RDoAMwp.webp')] bg-cover bg-center h-140 w-full">
             

                <div className="px-6 text-center flex flex-col items-center ">
                    <h1 className="text-stone-900 heding  lg:text-8xl md:text-7xl sm:text-6xl text-5xl mt-40 ">READY TO START? </h1>

                    <p className="text-stone-50 mt-6 lg:text-lg md:text-md sm:text-sm ">Our solar power experts will help you find the perfect solution for your home.</p>


                    <div className="mt-12">
                        <button className="bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-stone-50 hover:text-yellow-500 transition duration-200">
                            Calculate Solar
                        </button>
                    </div>


                </div>
            </div>

        </>

    )
}

export default Footer;