import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import { IoIosCloudUpload } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
// import Item from 'antd/es/list/Item';
function ProcessVector() {

  const Data = [
    {
      id: '1',
      img: <IoIosCloudUpload />,
      title: 'Upload Artwork',
      description: 'Send us your raster image (JPEG, PNG, etc.) that needs to be vectorized.'
    },
    {
      id: '2',
      img: <GiPencilBrush />,
      title: 'Vectorization & Preview',
      description: 'Our team converts it into a clean vector file and shares a preview.'
    },
    {
      id: '3',
      img: <FaTruckArrowRight />,
      title: 'Receive Final File',
      description: 'After approval, you’ll get the final vector file (AI, EPS, SVG, or PDF)'
    }
  ];

  return (
    <>
      <div className='Process'>
        <Container>
          <div className='section-padding'>
            <motion.div
              variants={FadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount: 0.7
              }}
              transition={{
                type: 'tween', scale: 0.8,
              }}
              className='ServiceSecText component-heading'>........
              {/* <h4>OUR PROCESS</h4> */}
              <h1>OUR PROCESS</h1>
            </motion.div>

            <div className='process-container'>
              {Data.map((Item) => (
                <div className='process-card'
                  key={Item.id}>
                  <div className='process-csrd-logo'>
                    <h1>{Item.img}</h1>
                  </div>
                  <h4>{Item.title}</h4>
                  <p>{Item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProcessVector