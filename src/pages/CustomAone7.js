import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/무역거래컨설팅.jpg';
import Img2 from '../images/무역거래컨설팅2.png';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone7 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>무역거래 컨설팅</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" />
            <br />
            <br />
            무역거래에 있어서 서류 작성은 매우 중요하며, 계약서 내용은 과세가격
            산정에 중요한 요소이므로 계약서 작성 시 특별한 주의가 필요합니다.
            <br />
            <br />
            에이원은 관세와 무역전문가들이 작성 단계에서 부터 통관상 문제가 될
            수 있는 과세가격 가산요소, 공제 요소 등을 검토하는 컨설팅을 제공하고
            있으며, FTA활용을 통한 비즈니스 모델 구축컨설팅을 제공하고 있습니다.
            <br />
            <br />
            수출기업을 위하여 정부의 수출지원제도에 대한 정확한 정보를 제공하며,
            각국의 관세 제도 및 관세율체계에 대한 정보를 제공하고 있습니다.
            <br />
            <br />
            무역 서류 작성에서부터 통관까지! 관세법인 에이원 무역전문가들의 통합
            서비스!!
            <br />
            <br />
            <img src={Img2} alt="" />
            <br />
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

export default CustomAone7;
