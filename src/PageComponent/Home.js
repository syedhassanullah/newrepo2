
import MainLayout from '../Layout/MainLayout';
import Hero from '../Components/Hero';
import ContactSec from '../Components/ContactSec';
import Slider from '../Components/Slider';
import { Container } from 'react-bootstrap';
import AboutSec from '../Components/AboutSec';
import Sec1 from '../Components/Sec1';
import {Service} from '../Components/Services/Service'




// import NEW  from '../Modal/NEW';



function BasicExample() {
  return (
    <div >
      <MainLayout>
        <Hero />
        {/* <NEW/> */}
        <Service/>

        <AboutSec />
        <ContactSec />
        <Sec1 />
        <Container fluid>
          <Slider />
        </Container>
      </MainLayout>
    </div>
  );
}




export default BasicExample;