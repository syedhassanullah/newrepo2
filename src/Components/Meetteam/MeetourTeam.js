import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../../Varient/Varient'
import './MeetourTeam.css'

function MeetourTeam() {
    return (
        <>
            <div className='meetourteam'>
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
                            <h1>MEET OUR TEAM</h1>
                        </motion.div>
                        <div className='meet'>
                            <div className='meetbox'>

                                <h4>Founder & Owner</h4><h2>Mr. Zayn</h2>
                                <p>ceo@beyonddigitizing.com</p>
                            </div>
                            <div className='meetbox'>
                                <h4>CO OWNER</h4>
                                <h2>Mr. Azan</h2>
                                <div className='mail'>
                                    <p>info@beyonddigitizing.com</p>
                                </div>
                            </div>
                            <div className='meetbox'>
                                <h4>Director of Sales</h4>
                                <h2>Mr. Ayan</h2>
                                <div className='mail'>
                                    <p>sales@beyonddigitizing.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default MeetourTeam
