import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';

import image1 from '../images (1).jpg'
import image2 from '../images.jpg'
import { Container } from 'react-bootstrap';


function Portfolio() {

    const [selectedValue, setSelectedValue] = useState('Digitizing');

    // Handler for the onChange event
    const handleChange = (value) => {
        setSelectedValue(value);
    };


    // const CustomToken = {
    //     token: {
    //         colorText: 'Black',
    //         lineWidth: 2,
    //         colorBgContainer: 'teransparent',
    //         fontSize: 16,
    //         colorBgElevated: 'rgb(158, 0, 34)',
    //         // colorBgLayout:,
    //         colorInfoTextActive: 'white',
    //         colorTextSecondary: 'black',
    //     }
    // }


    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    
                        <h1 >Our Portfolio</h1>
                </Container>
            </div>
            <Container>

                    <div className=' portfolio1'>
                        <div className='portfolio'>

                            <div className='justify-content-center segment'>
                                <Segmented size="large"
                                    options={[
                                        'Digitizing', 'Vector', 'Patches']}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='portfolio-Item'> 
                                {selectedValue === 'Digitizing' &&
                                    <div className='portfolio-image'>
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                        <Image width={250} src={image1} />
                                    </div>
                                }
                                {selectedValue === 'Vector' &&
                                    <div className='portfolio-image'>
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                        <Image width={250} src={image2} />
                                    </div>
                                }
                                {selectedValue === 'Patches' && <p>Long text option clicked. Displaying something for long text.</p>}
                            </div>

                        </div>
                    </div>


            </Container>
        </MainLayout>
    )
}




export default Portfolio