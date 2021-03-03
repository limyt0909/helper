import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from './Aboutaone.module.css';

import Img1 from '../images/주요고객사.png';
import Img2 from '../images/주요고객사2.png';
import Img3 from '../images/주요고객사3.png';
import Img4 from '../images/주요고객사4.png';
import Img5 from '../images/주요고객사5.png';
const Aboutaone10 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>주요고객사</div>
      <div className={styles.font}>
        <div class="container">
          <div className={styles.margin}>
            <br />
            <br />
            <h2> 주요고객사</h2>
            <br />
            각 분야별 최고의 업체들과 거래하는 관세법인 에이원! <br />
            그들이 믿고 맡기는 회사가 바로 관세법인 에이원입니다.
            <br /> 믿고 따라오시면 더욱 스마트한 기업이 되실 수 있습니다. 최상의
            서비스로 도와드리겠습니다.
            <hr />
            <img src={Img1} alt="1" width="100%" height="auto" />
            <img src={Img2} alt="2" width="100%" height="auto" />
            <img src={Img3} alt="3" width="100%" height="auto" />
            <img src={Img4} alt="4" width="100%" height="auto" />
            <img src={Img5} alt="5" width="100%" height="auto" />
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone10;
