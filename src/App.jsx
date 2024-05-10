import './css/styles.css'
import Hero from './components/hero'
import Features from './components/features'
import CTA from './components/CTA'
import Pricing from './components/pricing'
import About from './components/about'
import Testimonials from './components/testimonials'
import LogoBanners from './components/logo-banners'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
        <CTA/>
        <Pricing/>
        <About/>
        <Testimonials/>
        <LogoBanners/>
        <Footer/>
    </div>

  );
  // return ();
}

export default App
