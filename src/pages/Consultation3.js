import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/행정쟁송대리.jpg';
import Img2 from '../images/행정쟁송대리2.jpg';

import styles from './Aboutaone.module.css';

const Consultation3 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>행정쟁송 대리</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="행정쟁송대리" width="100%" height="auto" />
            <br />
            <br />
            <br />
            관세관련 위법·부당한 처분이 있거나 또는 필요한 처분이 없어 권리 및
            이익을 침해 당한 사람은 관세법에서 정하는 절차를 통하여 이를 구제
            받을 수 있습니다. 또한 관세법은 과세처분 전에 납세자의 신청에 의하여
            그 적정성이 사전에 재검토 될 수 있도록 하는 사전적 구제 제도도
            마련하여 납세자의 권리가 부당하게 침해될 가능성을 최소화 하고자
            노력하고 있습니다.
            <br />
            <br />
            그러나, 관세는 수많은 분야를 포함하고 있기 때문에 납세자 이익의
            보호와 환수는 이기는 방법을 아는 사람을 통하여 이길 수 있는 무기를
            가지고 이길 수 있도록 대응할 때 비로소 실현될 수 있습니다.
            <br />
            <br />
            <img src={Img2} alt="행정쟁송대리2" width="100%" height="auto" />
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

export default Consultation3;
