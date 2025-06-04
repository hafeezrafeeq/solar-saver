
function home() {

  return (
    
    <div className="px-6 text-center flex flex-col items-center ">
      <h1 className="text-amber-500 heding mt-15 lg:text-8xl md:text-7xl sm:text-6xl text-5xl ">Does Your Home <i className="text-stone-50 not-italic"> Need Quality </i></h1>
      <h1 className="text-stone-50 heding lg:text-8xl md:text-7xl sm:text-6xl text-5xl ">Solar Panel Installation? </h1>

      <p className="text-stone-50 mt-6 lg:text-lg md:text-md sm:text-sm ">Trust our experienced solar power experts to customize the perfect solution for your home.</p>


      <div className="mt-12">
        <button className="bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-stone-50 hover:text-yellow-500 transition duration-200">
          Calculate Solar
        </button>
      </div>

      <div className="m-auto top-90 top-10"><img src="https://solarsaver.vercel.app/assets/cover-C4PYW05n.webp" alt="img" /></div>

    </div>


  )

}

export default home;