import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/웹존.png';
import Img2 from '../images/웹존2.png';
import Img3 from '../images/웹존3.png';

import styles from './Aboutaone.module.css';

const Resources3 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>A-one Webzine </div>

      <img src={Img1} width="100%" height="auto" alt="웹존1" />
      <img src={Img2} width="100%" height="auto" alt="웹존2" />
      <img src={Img3} width="100%" height="auto" alt="웹존3" />
      <Bottom />
    </div>
  );
};

export default Resources3;
