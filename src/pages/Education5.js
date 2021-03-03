import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/글로벌네트워크.jpg';
import Img2 from '../images/글로벌네트워크2.jpg';
import Img3 from '../images/글로벌네트워크3.jpg';

import styles from './Aboutaone.module.css';

const Education5 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>글로벌 네트워크 </div>
      <div class="w3-container w3-content w3-padding-32">
        <div className={styles.margin}>
          <h2>글로벌 네트워크</h2>
          <img src={Img1} width="100%" height="auto" alt="" /> <br /> <br />{' '}
          <br />
          <div className={styles.global}>
            관세법인 에이원의 글로벌 네트워크!!{' '}
          </div>
          <br />
          <div className={styles.global2}>
            관세법인 에이원은 미주, 유럽, 아시아 주요 무역거점에 네트워크를
            구축하여 원활하고 현장 접근적 글로벌 서비스를 제공합니다.{' '}
          </div>
          <img src={Img2} width="100%" height="auto" alt="" /> <br />
          <br />
          <img src={Img3} width="105%" height="auto" alt="" />
          <br />
          <br />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Education5;
