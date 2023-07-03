import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from './components/MyNav';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import About from './components/About';
import Feature from './components/Feature';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Integration from './components/Integration';
import Support from './components/Support';
import Lease from './components/Lease';
import PreLoader from './components/PreLoader';
import Community from './components/Community';
import Pricing from './components/Pricing';
import Video from './components/Video';
import Top from './components/Top';
function App() {
  return (
    <>
      {/* <PreLoader /> */}
      {/* <MyNav/> */}
      <Hero />
      <WhatIs />
      <About />
      <Feature />
      <Support />
      <Integration />
      <Lease />
      <Community />
      <Pricing />
      <Video />
      <Footer />
      <Top />
    </>
  );
}

export default App;
