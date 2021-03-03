import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/고객지원1.jpg';
import Img2 from '../images/고객지원2.jpg';
import Img3 from '../images/고객지원3.jpg';

import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone9 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>고객지원</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" /> <br />
            <br />
            <h2>Customer Satisfaction</h2>
            <br />
            관세법인 에이원은 고객만족을 위하여 별도의 권역별 CS팀 및 업체별
            전담 관세사를 운영합니다. 업체별 전담 관세사들은 고객의 특성을
            파악하고, 이에 맞는 고객만족 프로그램을 설계하며, 매월 고객만족
            프로그램 운영 결과 보고를 통하여, 통관과정에 존재하는 다양한
            리스크와, 최신 무역 및 관세관련 법령 정보와 뉴스를 전해드립니다.
            또한, 관리업체의 기업 심사 및 FTA 등 다양한 컨설팅 요구를
            충족시켜드리고 있으며, 이외에도 관리업체에 필요한 교육을 설계하고,
            주기적으로 정기협의체를 운영하여 상호유기적으로 업무현황을 공유하고
            있습니다.
            <br />
            <br />
            <img src={Img2} alt="" /> <br />
            <br />
            <h2>고객만족 프로그램 구성</h2>
            <br />
            <br />
            <img src={Img3} alt="" width="100%" height="auto" /> <br /> <br />
            관세법인 에이원은 고객만족을 가장 중요하게 생각합니다. 전담 관세사의
            업무 스킬과 전문성, 응답의 효율성 등 주기적으로설문과 인터뷰를 통한
            고객 만족도평가를 평가하고, 이를 다시 프로그램에 적용하여 고객이
            생각하는 우선순위에 맞는 서비스를 제공해 드릴 수 있도록 최선을
            다하고 있습니다.
            <br />
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

export default CustomAone9;
