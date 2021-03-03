import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/AEO.jpg';

import styles from './Aboutaone.module.css';

const Consultation5 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>AEO</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="심사대리" width="100%" height="auto" />
            <br />
            AEO(Authorized Economic Operator)는 수출입 안전관리와 통관의
            원활화를 위한 WCO(World Customs Organization)가 권고하는 제도로서
            AEO 인증을 통해 다양한 혜택과 해외 세관에서의 원활한 통관절차를
            지원받음으로써 기업이 AEO 인증을 받아야 하는 것은 이미 선택의 문제가
            아니라 필수요건이 되었습니다. 인증 – 사후관리 – 종합 심사까지
            에이원만의 One-Stop Service 제공!! 에이원은 AEO인증 컨설팅에서부터
            인증후 사후관리, 종합 심사 대리까지 One-Stop 서비스를 제공하며 100%
            인증을 자랑하는 최고의 AEO 전문 컨설팅 업체입니다. AEO인증에 필요한
            법규준수도의 향상을 위해 프로그램을 통한 외사의 법규준수도 향상을
            도우며 기업의 AEO 담당자들에게 인증에 대한 조언을 함께 진행하고
            있습니다. AEO는 인증 후 사후관리 또한 중요한 부분입니다. 에이원은
            오래 축적된 노하우를 활용하여 AEO 사후관리를 제공하고 있으며 연말에
            세관에 제공하는 보고서 작성을 함께 도와 드립니다 에이원은 AEO 인증을
            받은 기업들이 받는 종합심사에 있어 Preview를 통해 예상 리스크를
            분석하여 정상화 시킴으로 추징에 따른 기업의 부담을 경감시키고
            있습니다.
          </div>
          <br />
          <br />
          <Customs />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Consultation5;
