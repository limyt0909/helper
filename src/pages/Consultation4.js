import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/FTA.jpg';

import styles from './Aboutaone.module.css';

const Consultation4 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>FTA</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="FTA" width="100%" height="auto" />
            <br />
            <br />
            미국, EU, 아세안 등 주요 교역 상대국과 FTA(Free Trade Agreement)
            체결로 우리 나라의 무역은 FTA를 빼고는 생각할 수 없게 되었습니다.
            그동안의 FTA로 관세는 줄었지만 리스크는 커졌고, FTA를 최대로
            활용하기 위해서는 보다 전문적인 지식이 필요하다는 것을 인식하게
            되었습니다.
            <br />
            FTA 체약국간에 원산지검증 요청이 크게 증가하고 있으며 수입물품에
            대한 원산지 검증으로 관세 추징 사례가 증가하고 있습니다. 이에 따라
            기업은 FTA 활용을 어떻게 강화하느냐의 문제와 세관의 원산지 검증에
            따른 리스크를 최소화하는 방법이 중요 과제가 되었습니다.
            <br />
            에이원은 FTA 활용을 강화하고 원산지 검증 리스크를 최소화하기 위하여
            FTA 연구센터를 설치하고 FTA 컨설팅과 교육을 전담하고 있습니다.
            에이원만의 노하우로 기업 고객에게 다양한 서비스를 제공해 드립니다.
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

export default Consultation4;
