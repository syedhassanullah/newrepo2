import React from 'react';
import { Collapse } from 'antd';
import './Counter.css';
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient';

const counterItems  = [
  {
    key: '1',
    label: 'Why Choose Us for Your Embroidery Needs?',
    content: 'We offer a free first design to ensure you’re satisfied before committing. Our quality is top-notch, ensuring precision and detail in every stitch. Plus, we guarantee timely delivery—your designs are ready within 24-48 hours.',
  },
  {
    key: '2',
    label: 'What Makes Our Service Stand Out?',
    content: 'With over 10 years of experience, we have perfected the art of digitized embroidery, delivering flawless designs for leading brands and clients worldwide. Our team’s attention to detail ensures that every design is perfect.',
  },
  {
    key: '3',
    label: 'How Do We Ensure Client Satisfaction?',
    content: 'Our 98% client satisfaction rate speaks for itself. We focus on quality and meeting deadlines, ensuring that every client is thrilled with their design.',
  },
  {
    key: '4',
    label: 'How Do We Handle Global Projects?',
    content: 'Serving clients in over 30 countries, we are experts in global embroidery needs. No matter where you are, we deliver high-quality digitizing solutions that meet your specific requirements.',
  },
  {
    key: '5',
    label: 'Why Do Clients Trust Our Fast Turnaround?',
    content: 'We prioritize efficiency without compromising quality. Our designs are delivered within 24-48 hours, so you can trust us to get your designs ready quickly and to your exact specifications.',
  },
  {
    key: '6',
    label: 'What Makes Our Team Special?',
    content: 'Our team consists of over 100 skilled professionals, all dedicated to perfecting every stitch. From the first draft to the final design, we ensure that each project receives expert attention and care.',
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
