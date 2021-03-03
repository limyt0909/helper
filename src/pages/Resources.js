import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/관세무역뉴스.png';
import Img2 from '../images/관세무역뉴스2.png';

import styles from './Aboutaone.module.css';

const Resources = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>관세무역 뉴스 </div>
      <br />

      <br />
      <img src={Img1} alt="뉴스1" width="100%" height="auto" />
      <br />
      <img src={Img2} alt="뉴스2" width="100%" height="auto" />
      <Bottom />
    </div>
  );
};

export default Resources;
