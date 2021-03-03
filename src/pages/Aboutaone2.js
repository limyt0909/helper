import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/조지도.png';
import styles from './Aboutaone.module.css';

const Aboutaone2 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}> 조 직 도 </div>
      <div class="w3-container w3-content w3-padding-64">
        {' '}
        <h2>조직도</h2>
        <img src={Img1} alt="조지도" width="100%" height="auto" />
      </div>
      <br /> <br />
      <Bottom />
    </div>
  );
};

export default Aboutaone2;
