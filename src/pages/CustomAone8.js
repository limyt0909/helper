import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/물류컨설팅.jpg';
import Img2 from '../images/물류컨설팅2.png';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone8 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>물류 컨설팅</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" />
            <br />
            <br />
            무역거래에서 물류비용이 차지하는 비율은 매우 큽니다. 효율적인
            물류시스템, 정확하고 많은 물류정보, 신속한 물류흐름은 기업의 경비를
            절감하고 생산의 효율을 높이는데 중요합니다.
            <br />
            <br />
            에이원은 오랜 통관과 물류 컨설팅 경험 그리고 많은 네트워크를
            바탕으로 포워딩, 보관, 운송 등 각 분야에 대한 물류 컨설팅을 제공하고
            있습니다. 또한 보세구역 설영특허를 대행해주고 있으며, 자유무역지역
            입주기업에 대한 물품의 반출입 컨설팅등 물류 부대 업무에 관한 다양한
            컨설팅을 제공하고 있습니다.
            <br />
            <br />
            <h3>에이원의 물류 비용 절감과 신속한 물류 시스템 구축 컨설팅!!</h3>
            <img src={Img2} alt="" width="100%" height="auto" />
            <br />
            <br />
            에이원이 물류비용절감과 신속한 물류시스템 구축을 도와드리겠습니다.
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

export default CustomAone8;
