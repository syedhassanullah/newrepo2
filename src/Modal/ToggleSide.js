import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import SideModal3 from './SideModal3';

function ToggleSide() {
      const [humburger, setHumburger] = useState('black');
      const [helo, setHelo] = useState(false);
    
      const click = () => {
        setHelo(true);
        setHumburger('rgb(158, 0, 34)')
      };
    
      const onClose = () => {
        setHelo(false)
        setHumburger('black')
      };
    
      const HandelTogel = (toggled) => {
        if (toggled) {
          click();
        } else {
          onClose();
        }
      }


  return (
    <>
        <div className='humburger'>
          <Hamburger
            toggled={helo}
            type="primary"
            color={humburger}
            direction='right'
            size={25}
            duration={0.5}
            onToggle={HandelTogel}
          />
        </div>
        <SideModal3 helo={helo} onClose={onClose}/>
    </>
  )
}

export default ToggleSide