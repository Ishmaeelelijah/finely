import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import About from './components/About/About';
import Online from './components/Online/Online';
import Payment from './components/Payment/Payment';
import Card from './components/Cards/Card';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
        <div className='hero'>
          <Hero />
        </div>
        <div className='features'>
         <Features />
        </div>
        <div className='about'>
         <About />
        </div>
        <div className='about'>
          <Online />
        </div>
        <div className='about'>
          <Payment />
        </div>
        <div className='about'>
          <Card />
        </div>
        <div className='about'>
          <Contact />
        </div>
    </div>

  );
}

export default App;
