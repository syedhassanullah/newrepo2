
import MainLayout from '../Layout/MainLayout';
import Hero from '../Components/HERO/Hero';
import ContactSec from '../Components/ContactSec';
import AboutSec from '../Components/AboutSec';
// import Sec1 from '../Components/Sec1';
import {Service} from '../Components/Services/Service'
import FlagSlider from '../Components/Slider/FlagSlider';
import LogoSlider from '../Components/Slider/LogoSlider'

import ClientReview from '../Components/ClientReview/ClientReview';
// import Counter from '../Components/Counter/Counter';
// import CountrySlider from '../Components/Slider/CountrySlider';
import Process from '../Components/Process/Process';
import MeetourTeam from '../Components/Meetteam/MeetourTeam';




// import NEW  from '../Modal/NEW';



function Home() {




  return (
    <div >
      <MainLayout>
        <Hero />
        <Service/>
        <AboutSec />
        <ClientReview/>
        <FlagSlider/>
        <MeetourTeam/> 
        <ContactSec />
        <Process/>
        {/* <Counter/> */}
        <LogoSlider/>
        
        {/* <CountrySlider/> */}
        {/* <Sec1 /> */}
      </MainLayout>
    </div>
  );
}




export default Home;