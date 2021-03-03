import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/인사제도.png';
import Img2 from '../images/인사제도2.png';
import styles from './Aboutaone.module.css';

const Aboutaone8 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>인사제도</div>
      <div class="w3-container w3-content w3-padding-32">
        <h2>인사제도</h2>
        <br />
        <br />
        <img src={Img1} alt="인사제도1" width="95%" height="auto" />
        <br />
        <img src={Img2} alt="인사제도2" width="95%" height="auto" />
      </div>{' '}
      <br />
      <Bottom />
    </div>
  );
};

export default Aboutaone8;
