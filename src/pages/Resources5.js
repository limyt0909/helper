import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/정운기칼럼.png';
import Img2 from '../images/정운기칼럼2.png';

import styles from './Aboutaone.module.css';

const Resources5 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>정운기 칼럼 </div>
      <img src={Img1} width="100%" height="auto" alt="정운기칼럼" />
      <img src={Img2} width="100%" height="auto" alt="정운기칼럼2" />
      <Bottom />
    </div>
  );
};

export default Resources5;
