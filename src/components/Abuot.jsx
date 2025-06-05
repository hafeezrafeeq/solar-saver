
function home() {
    return  (
        <>

            <div className="px-12 flex flex-col sm:flex-col + text-start md:flex-row + text-center lg:flex-row + text-center gap-3 justify-between items-center mt-24">
                <div className="flex flex-col gap-2 ">
                    <h3 className="text-stone-50 text-2xl lg:text-2xl md:text-1xl sm:text-lg text-lg ">ABUOT US</h3>
                    <h1 className="text-amber-500 text-2xl heding lg:text-8xl md:text-7xl sm:text-6xl text-5xl">SOLAR <i className="not-italic text-stone-50">SAVER</i> </h1>
                    <p className="text-stone-50 text-xl lg:text-xl md:text-lg  sm:text-md text-md w-2/2 mt-6">Solar Saver is revolutionizing the solar industry by offering the most cost-effective solar solutions in America.
                        We specialize in providing transparent, instant pricing for solar installations. With an innovative AI quoting engine,
                        they ensure personalized and accurate estimates for each customer.</p>

                    <p className="text-stone-500 tex-xl w-2/2 mt-4 ">Solar Saver also offers innovative battery solutions and flexible financing options, making solar energy
                        more accessible and affordable.</p>
                </div>

                <div>
                    <img className=" mt-20 lg:w-480 md:w-380 sm:w-80 text-280" src="https://solarsaver.vercel.app/assets/about-img-CpwndtbG.webp" alt="img" />
                </div>
            </div>



            <div className="flex flex-col sm:flex-col + mx-5 md:flex-col + mx-10 lg:flex-row + mx-10 gap-10 justify-between items-end  relative z-20  ">
            

                <div className="flex flex-col w-full  gap-15 my-20">
                    <div className=" h-auto bg-gradient-to-r from-transparent to-amber-500">
                        <h1 className="heding text-3xl font-bold text-end pt-6 px-10 text-stone-50">SYSTEM</h1>
                        <p className="text-1xl font-bold text-end  text-stone-50 pb-5 px-10">9.5 - 14.13 kWh*</p>
                    </div>

                    <div class="w-2/3 h-auto bg-gradient-to-r from-transparent to-amber-500">
                        <h1 className="heding text-3xl font-bold text-end pt-6 px-10 text-stone-50">SOLAR PANELS</h1>
                        <p className="text-1xl font-bold text-end  text-stone-50 pb-5 px-10">34 - 43**</p>
                    </div>

                    <div class="w-1/2 h-auto bg-gradient-to-r from-transparent to-amber-500">
                        <h1 className="heding text-3xl font-bold text-end pt-6 px-10 text-stone-50">CO2 Offset</h1>
                        <p className="text-1xl font-bold text-end  text-stone-50  px-10">7.65 - 9.07*</p>
                    </div>
                </div>


                <div className="flex flex-col gap-2 w-3/3 ">
                    <h1 className="text-amber-500  heding lg:text-7xl md:text-6xl sm:text-6xl text-3xl">AI <i className="not-italic text-stone-50"> Utilization</i> </h1>
                    <p className="text-stone-500  w-2/2 mt-6 lg:text-lg md:text-lg sm:text-sm text-sm">Solar Saver utilizes an AI quoting engine to estimate the ideal solar system size for a customer's specific needs.
                        This system calculates the number of solar panels required, the potential CO2 offset, and the new, likely reduced monthly power bill.</p>

                    <p className="text-stone-500 w-2/2 mt-2 lg:text-lg md:text-lg sm:text-sm text-sm">SBy analyzing various factors such as roof size, local sun exposure, and current electricity usage, the AI provides atailored solution.</p>

                    <p className="text-stone-500 w-2/2 mt-4 lg:text-lg md:text-lg sm:text-sm text-sm">Solar Saver also offers innovative battery solutions and flexible financing options, making solar energy
                        more accessible and affordable.</p>

                </div>
            </div>
        </>
    )

}

export default home;