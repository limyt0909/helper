import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/조사대리.jpg';
import Img2 from '../images/조사대리2.jpg';

import styles from './Aboutaone.module.css';

const Consultation2 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>조사 대리</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="조사대리" width="100%" height="auto" />
            <br />
            <br />
            세관 조사는 단순한 밀수범에 대한 조사보다는 부정 무역, 관세 포탈,
            FTA 부정활용, 외환거래 등 통관의 적법성과 관련이 깊은 분야에 대한
            조사가 진행되므로 세관 조사 시에는 관세에 관한 전문가인 관세사의
            조력을 받는 것이 피조사자의 권익보호를 위하여 반드시 필요합니다.
            <br />
            기업이나 개인이 세관공무원의 조사를 받을 경우에 관세법에서
            피조사자는 관세사의 조력을 받을 수 있으며 또한 관세사는 피조사자를
            위하여 진술을 대리할 수 있도록 규정되어 있습니다.
            <br />
            <img src={Img2} alt="조사대리2" width="100%" height="auto" />
            <br />
            <br />
            <br />
          </div>
          <Customs />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Consultation2;
