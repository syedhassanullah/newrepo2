import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import { IoIosCloudUpload } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
// import Item from 'antd/es/list/Item';
function ProcessPatches() {

  const Data = [
    {
      id: '1',
      img: <IoIosCloudUpload />,
      title: 'Submit Design',
      description: ' Upload your artwork in any format with proper instructions like size, packing and colours of the design.'
    },
    {
      id: '2',
      img: <GiPencilBrush />,
      title: 'Sample & Approval',
      description: 'Our experts will create a digital sample and send it to you for review and approval. You can approve it based on your requirements.'
    },
    {
      id: '3',
      img: <FaTruckArrowRight />,
      title: 'Production & Delivery',
      description: 'Once you approve the digital sample, we will proceed with the final production and send you a picture before shipping. After that, we will ship your order, and you should receive it within 3 to 4 working days.'
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

export default ProcessPatches