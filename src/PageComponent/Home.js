
import MainLayout from '../Layout/MainLayout';
import Hero from '../Components/HERO/Hero';
import ContactSec from '../Components/ContactSec';
import AboutSec from '../Components/AboutSec';
// import Sec1 from '../Components/Sec1';
import {Service} from '../Components/Services/Service'
import FlagSlider from '../Components/Slider/FlagSlider';
import LogoSlider from '../Components/Slider/LogoSlider'
import Process from '../Components/Process';
import ClientReview from '../Components/ClientReview/ClientReview';



// import NEW  from '../Modal/NEW';



function BasicExample() {
  return (
    <div >
      <MainLayout>
        <Hero />
        {/* <NEW/> */}
        <Service/>
        <LogoSlider/>
        <AboutSec />
        <ContactSec />
        <Process/>
        <ClientReview/>
        <FlagSlider/>
        {/* <Sec1 /> */}
      </MainLayout>
    </div>
  );
}




export default BasicExample;