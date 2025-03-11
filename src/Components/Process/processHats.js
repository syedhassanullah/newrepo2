import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import { IoIosCloudUpload } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
// import Item from 'antd/es/list/Item';
function ProcessHats() {

  const Data = [
    {
      id: '1',
      img: <IoIosCloudUpload />,
      title: 'Pick Style & Send',
      description: 'Pick a type of cap and Give us the proper instructions and proper details about the order, like fabric, quantities and sizes. If you want to add any specific feature or requirement, please let me know.'
    },
    {
      id: '2',
      img: <GiPencilBrush />,
      title: 'Preview & Refinements',
      description: 'We will create a digital preview of your order according to your specific needs.'
    },
    {
      id: '3',
      img: <FaTruckArrowRight />,
      title: 'Production & Delivery',
      description: 'Once you approve the digital files and digital mockup, we will go for the final production and ship to you.'
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

export default ProcessHats