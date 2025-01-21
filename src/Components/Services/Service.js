import React from 'react'
import { Container } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import ServiceData from './ServiceData'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import { Link } from 'react-router-dom'
export const Service = () => {
    return (
        <>
            <div className='ServiceSec '>
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
                            <h2>OUR SERVICES</h2>
                            <h1>Beyond Digitizing</h1>
                        </motion.div>
                        <div className='ServiceSecContainer '>
                            {ServiceData.map(service => (


                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                />

                            ))}
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className='mainButton2'
                        >
                           <Link to={'/services/digitizing'}>View All</Link>
                        </motion.div>

                        </div>
                         
                    </div>
                </Container>
            </div>
        </>
    )
}
