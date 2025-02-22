import React from 'react';
import { Collapse } from 'antd';
import './Counter.css';
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient';


const counterItems = [
  {
    key: '1',
    label: 'Successful Clients',
    content: 'Over 1,000+ Successful Clients Worldwide. Trusted by Leading Brands for Precision and Quality',
  },
  {
    key: '2',
    label: 'Projects Completed',
    content: '500+ Embroidery Designs Perfected. Delivering Flawless Digitizing Solutions for Over 10 Years',
  },
  {
    key: '3',
    label: 'Client Satisfaction',
    content: '98% Client Satisfaction Rate. Our Clients Love the Detail and Quality of Our Work',
  },
  {
    key: '4',
    label: 'Global Reach',
    content: 'Serving Clients in 30+ Countries. Global Experts in Digitized Embroidery',
  },
  {
    key: '5',
    label: 'Fast Turnaround',
    content: 'Designs Delivered Within 24-48 Hours. Your Vision, Digitized and Ready Fast',
  },
  {
    key: '6',
    label: 'Team of Experts',
    content: '100+ Skilled Professionals. A Team Committed to Perfecting Every Stitch',
  },
];

const ChooseQues = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div style={{ justifyContent: 'space-between', padding: '20px' }} className='choose'>
      {/* Left Side Content */}


      {/* Right Side Counter (Collapse Items) */}
      <motion.div
        variants={FadeIn('left')}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once: true, amount: 0.3
        }}
        transition={{ type: 'tween' }} >
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          {counterItems.map(item => (
            <Collapse.Panel header={item.label} key={item.key}>
              <p>{item.content}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </motion.div>
    </div>
  );
};

export default ChooseQues;
