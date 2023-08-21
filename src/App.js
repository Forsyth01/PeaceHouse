import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Support from './Components/Support';
import About from './Pages/About';
import Activities from './Pages/Activities';
import Admission from './Pages/Admission';
import BuildingBridges from './Pages/BuildingBridges';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Faculty from './Pages/Faculty';
import Hero from './Pages/Hero';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <Navbar />
        <Hero />
        <About/>
        <Courses/>
        <Admission/>
        <Faculty/> 
        <BuildingBridges/>
        <Activities/>
        <Testimonial/>
        <Support/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
