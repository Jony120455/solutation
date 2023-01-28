
import './App.css';
import About from './components/About/About';
import AllInOne from './components/AllInOne/AllInOne';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Pricing from './components/Pricing/Pricing';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="">
     <Navber></Navber>
     <Banner></Banner>
     <About></About>
     <Support></Support>
     <AllInOne></AllInOne>
     <Pricing></Pricing>
     <Footer></Footer>
    </div>
  );
}

export default App;
