import React from 'react';
import { WoodenFence } from './Models/woodenFence';
import { Sign } from './Models/sign';
import WelcomeText from './Text/WelcomeText';
import Crusader from './Models/crusader';
import { Figurita } from './Models/figurita';

const Welcome = () => {
  return (
    <>
    <Crusader />
    <Figurita />
    <WoodenFence position={[4,0,3]}/>
    <Sign position={[-3,-2,0]}>
        <WelcomeText />
      </Sign>

    </>
  )
};

export default Welcome;