import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/복리후생.png';
import Img2 from '../images/복리후생2.png';
import styles from './Aboutaone.module.css';

const Aboutaone9 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>복리후생</div>
      <div class="w3-container w3-content w3-padding-32">
        <br />
        <br />
        <h2>복리후생</h2>
        <br />

        <img src={Img1} alt="복리후생" width="100%" height="auto" />
        <img src={Img2} alt="복리후생2" width="100%" height="auto" />
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone9;
