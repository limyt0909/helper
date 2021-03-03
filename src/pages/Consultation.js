import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/심사대리.jpg';

import styles from './Aboutaone.module.css';

const Consultation = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>심사 대리</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="심사대리" width="100%" height="auto" />
            <br />
            세관에서는 법인에 대하여 3년 내지 5년을 주기로 법인 심사를 실시하며,
            산업 분야별, 특정 품목별 등 특정 분야별로 무역정보를 분석하여
            기획심사를 실시 합니다. AEO(Authorized Economic Operator) 인증업체에
            대하여는 종합 심사를 실시하고 있습니다. 세관심사는 세율 적용의
            적정성, FTA협정 적용의 적정성, 과세가격의 정확성, 외환거래의 적정성
            등 모든 통관의 적법성을 심사하게 됩니다.
            <br />
            <br />
            <h2>심사 ‘전문 컨설팅 그룹’의 책임있는 심사 대리 수행!!</h2>
            세관에서 경력을 쌓은 최고 전문가 (품목분류, 과세가격 평가, 외환거래,
            FTA 등 다양한 분야) 업계 최고의 전문관세사들로 구성되어 책임 있는
            심사 대리 수행 심사 종료 후에도 모든 절차가 종료될 때까지 책임 완수
            (전문가들이 직접 현장에 나아가 심사에 대응)
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

export default Consultation;
