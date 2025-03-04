import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import { Container } from 'react-bootstrap';
import LogoSlider from '../../Slider/LogoSlider';
import './ServicesDetail.css'
import PatchesData from '../../../DataFile/ServicesData/PatchesData';
import Process from '../../Process/ProcessPatches';


function Patches() {

    console.log(PatchesData)
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Patches</h1>
                </Container>
            </div>

            <Container>
                <div className="ServicesDetailcard">
                    {PatchesData?.map((data) => (
                        <div className="card" key={data.id}>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
<Process/>
            <LogoSlider />
        </MainLayout>
    );
}

export default Patches;
