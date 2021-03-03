import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/산업별네트워크.jpg';
import Img2 from '../images/산업별네트워크2.jpg';

import styles from './Aboutaone.module.css';

const Education4 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>산업별 네트워크 </div>
      <div class="w3-container w3-content w3-padding-32">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} width="100%" height="auto" alt="" /> <br />
            <br />
            관세법인 에이원에서는 각 산업마다 다양한 수출입 무역과 통관 상의
            요구를 만족시키기 위해 각 산업별 단체와 협회들과 다양한 수출입 지원
            프로그램을 수행해 왔습니다.이러한 활동을 통해 관세법인 에이원은
            급변하는 통상환경에 빠르게 적응하기 위해 수출입 전문인력을 육성할 수
            있는 교육과 새로운 관세·무역 제도나 규제를 기업에 적용할 수 있도록
            설계해 드리는 컨설팅 프로그램 등 다양한 프로그램을 각 산업의 요구에
            맞춰 제공해 드립니다.
            <br />
            <br />
            <br />
            <img src={Img2} width="105%" height="auto" alt="" /> <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Education4;
