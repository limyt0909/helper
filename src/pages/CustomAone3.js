import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/소액물품.png';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone3 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>소액 물품 및 이사화물</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" />
            <br />
            <br />
            온라인 마켓의 활성화와 글로벌 라이징의 가속화로 소액 물품과 해외이사
            화물이 물류와 특송 시장에서 차지하는 비중이 점차 증가하고 있습니다.
            관세법인 에이원에서는 물류 기업과 특송업체들이 소액 물품 및 이사화물
            통관에 소요되는 시간과 비용을 최소화할 수 있도록 체계적인 특수통관
            절차를 수행하고 있습니다.
            <br />
            <br />
            간이 통관, 우편물 통관, 이사화물 통관 전담팀이 신고서 작성, 검사
            대행 등 물품의 특성과 통관지 세관의 업무절차에 대한 이해를 바탕으로,
            원활하고 신속한 특수통관 맞춤형 서비스를 위해 전산시스템 TCMS를 별도
            구축하여 제공하고 있습니다.
            <br />
            <br />
          </div>
          <Customs />
        </div>
      </div>

      <br />
      <Bottom />
    </div>
  );
};

export default CustomAone3;
