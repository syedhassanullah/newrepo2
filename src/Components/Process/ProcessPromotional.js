import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import { IoIosCloudUpload } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
// import Item from 'antd/es/list/Item';
function ProcessPromotional() {

  const Data = [
    {
      id: '1',
      img: <IoIosCloudUpload />,
      title: 'Select & Upload',
      description: 'To the service that you need in promotional products, like mugs, keychains, etc. Let me have all the details about the order, like quantities, size, and all the basic details of the order.'
    },
    {
      id: '2',
      img: <GiPencilBrush />,
      title: 'Mockup & Approval',
      description: 'We create a digital mockup for approval according to your needs.'
    },
    {
      id: '3',
      img: <FaTruckArrowRight />,
      title: 'Printing & Shipping',
      description: 'Once you approve the order, we will start the final production and then send you the picture, and then shipping to you.'
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

export default ProcessPromotional