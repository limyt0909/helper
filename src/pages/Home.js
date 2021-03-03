import React from 'react';

import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Slideshow from '../Slideshow/Slideshow';

import Homes2 from '../Homes/Homes2';
import Homes3 from '../Homes/Homes3';
import Homes4 from '../Homes/Homes4';

const Home = () => {
  return (
    <div>
      <Top />
      <Slideshow />
      <Homes3 />
      <Homes2 />
      <Homes4 />

      <Bottom />
    </div>
  );
};

export default Home;
