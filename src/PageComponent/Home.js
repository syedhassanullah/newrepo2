
import MainLayout from '../Layout/MainLayout';
import Hero from '../Components/Hero';
import ContactSec from '../Components/ContactSec';
import AboutSec from '../Components/AboutSec';
import Sec1 from '../Components/Sec1';
import {Service} from '../Components/Services/Service'
import FlagSlider from '../Components/Slider/FlagSlider';
import LogoSlider from '../Components/Slider/LogoSlider'



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
        <FlagSlider/>
        {/* <Sec1 /> */}
      </MainLayout>
    </div>
  );
}




export default BasicExample;