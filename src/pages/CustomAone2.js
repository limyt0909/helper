import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/수출통관.png';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone2 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>수출통관</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="수출통관" width="100%" height="auto" />
            <br />
            <br />
            전 세계 주요 수출국을 연계하는 글로벌 수출통관과 검사 및 검역지원
            시스템을 운영하고 있으며, 주요 수출국의 통관시스템을 분석하여
            수출기업에 필요한 정보제공 등 통합 서비스를 제공하고 있습니다.
            <br />
            <br />
            FTA 특혜관세 수혜를 통한 기업의 수출경쟁력 확보를 위해
            원산지관리시스템(OMS)을 구축하여 제공하고 있으며, 협정별로 복잡한
            원산지증명서 발급업무를 대행하고 있습니다.
            <br />
            <br />
            고객사별로 수출전담 직원을 배치하여 신속한 수출통관을 지원하고
            있으며, 보세운송 및 국내운송 대행은 물론 업체별 실정에 맞는 물류
            프로세스를 최적화한 서비스를 제공하고 있습니다.
            <br />
            <br />
            정부의 수출 지원정책에 맞춰 중소기업에 대한 맞춤형 수출 컨설팅을
            수행하고 있으며, 수출입 내부통제 및 위험관리 절차에 대한 통합
            컨설팅도 수행하고 있습니다. 고객정보 유출방지시스템 등 관세리스크
            해소를 위한 다양한 시스템을 구축하여 운영함은 물론 전사적 차원의
            고객관리로 고객만족 보증서비스를 제공하고 있습니다.
          </div>
          <Customs />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Bottom />
    </div>
  );
};

export default CustomAone2;
