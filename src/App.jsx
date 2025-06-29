
import './App.css'
import Appbar from "./components/Appbar";
import Header from './components/Headar'
import Card from './components/Card'
import Abuot from './components/Abuot'
import Tools from './components/Tools'
import Work from './components/Work'
import Map from './components/Map'
import Before from './components/Before'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Slider from './components/Slider'
import CastumerReview from "./components/CastumerReview"
import Question from './components/Question'
import Footer from './components/Footer'
import Cloner from './components/Cloner'







function App() {
  const FIRST_IMAGE = {
    imageUrl: 'https://solarsaver.vercel.app/assets/after-slider-zGc8hDen.webp'
  };
  const SECOND_IMAGE = {
    imageUrl: 'https://solarsaver.vercel.app/assets/before-slider-5RDoAMwp.webp'
  };
  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      <Appbar
        innerClass="hidden"></Appbar>
      <Header></Header>
      <section id="Header" ></section>
      <Card></Card>

      <section id="About" ></section>
      <Abuot></Abuot>

      <section id="Tools"></section>
      <Tools></Tools>

      <section id="Before"></section>
      <Before></Before>

      <div className='w-2/3 m-auto bottom-140'>
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}

        />
      </div>
      <section id="Work"></section>
      <Work></Work>
      <Map></Map>
      <section id="Work"></section>
      <Slider></Slider>
      <CastumerReview></CastumerReview>


      <section id="Question"></section>
      <Question
        question="WHAT IS SOLAR ENERGY?"
        answer="Solar panels work by capturing sunlight through photovoltaic cells, which convert the sunlight into direct current (DC) electricity. An inverter then converts the DC electricity into alternating current (AC) electricity for use in homes and businesses."
        className=" mt-40 "
       
      />


      <Question
        question="WHAT ARE THE BENEFITS OF USING SOLAR PANELS?"
        answer="Solar panels offer several benefits, including reducing electricity bills, decreasing carbon footprint, and providing a renewable source of energy. They also have low maintenance costs and can increase property value."
        className=" mt-2"
      />

      <Question
        question="HOW LONG DO SOLAR PANELS LAST?"
        answer="Solar panels typically have a lifespan of 25 to 30 years. However, their efficiency may decrease slightly over time. Most manufacturers offer warranties that guarantee performance for 20-25 years."
        className=" mt-2 "
      />

      <Question
        question="WHAT MAINTENANCE DO SOLAR PANELS REQUIRE?"
        answer="Solar panels require minimal maintenance. It is recommended to clean them a few times a year to ensure they are free of debris and dust. Regular inspections can help identify and address any potential issues early."
        className=" mt-2 mb-40"
      />

      <Footer></Footer>
      <Appbar showMenu={false} showButton={false}
        outerClass="flex flex-col gap-10 flex-wrap mb-10 justify-center items-center">
      </Appbar>

      <Cloner></Cloner>












    </div>
  )
}

export default App
