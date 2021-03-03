import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/관세무역자료실.png';
import Img2 from '../images/관세무역자료실2.png';
import styles from './Aboutaone.module.css';

const Resources2 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>관세무역 자료실 </div>

      <img src={Img1} alt="자료실" width="100%" height="auto" />
      <img src={Img2} alt="자료실2" width="100%" height="auto" />
      <br />
      <br />

      <Bottom />
    </div>
  );
};

export default Resources2;
