import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/검역.jpg';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone5 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>검역</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" />
            <br />
            <br />
            외국에서 수입되는 식품, 식물, 축산물 및 사료 등은 모두 검역을 통해
            수입을 할 수 있습니다. 식약청이나 농림부의 검역은 세관의 수입통관
            절차보다 선행하며 더 신중하게 진행되는 경우가 많습니다. 따라서
            신속하고 정확한 검역절차 이행은 수입자에게는 매우 중요한 사항입니다.
            <br />
            <br />
            <h3>
              검역대상물품에 대한 수출입 통관 대행과 검역대행 One-Stop 서비스!!
            </h3>
            <br />
            에이원은 부산에 검역 총괄본부를 두고 수도권에는 성남과 인천공항에
            검역을 전담하는 팀을 구성하여 검역 대상물품에 대한 수출입 통관
            대행과 검역대행 One-Stop 서비스를 제공하며, 식품 수입시 위생조건,
            검역조건 등에 관하여 사전 검토를 하고 관련기관에 사전검역신청 등을
            통하여 검역상의 리스크를 제거하고 검역이나 수입 통관 과정에서
            지적되는 라벨링에 대한 보수작업도 함께 수행하고 있습니다.
            <br />
            <br />
            에이원은 국내 대부분의 검역대상 물품에 대한 검역경험을 갖고 있으며
            검역 교육을 이수한 전문가가 검역을 수행하고 있는 국내 최고의 검역
            전문 관세법인입니다.
            <br />
            <br />
            에이원의 검역 전문가들은 신속하고 안전한 검역절차를 수행하겠습니다.
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

export default CustomAone5;
