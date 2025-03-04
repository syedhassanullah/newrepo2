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
      title: 'Submit Your Idea',
      description: 'Submit your logo, artwork, or design in any digital format, including JPEG, PNG, and PDF.'
    },
    {
      id: '2',
      img: <GiPencilBrush />,
      title: 'Digitizing & Preview',
      description: 'Our skilled team will transform your design into a professional embroidery file. You’ll receive a preview for approval and we’ll fine-tune it to perfection.'
    },
    {
      id: '3',
      img: <FaTruckArrowRight />,
      title: 'Production & Delivery',
      description: 'Once approved, we’ll create your patches with meticulous attention to detail and deliver them to you, ready to enhance your look!'
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