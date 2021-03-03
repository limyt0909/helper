import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/관세환급.jpg';
import Img2 from '../images/관세환급2.png';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone4 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>관세환급</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <img src={Img1} alt="" width="100%" height="auto" />
            <br />
            <br />
            원재료를 수입할 때 납부한 관세를 완제품을 수출함으로써 되돌려 받을
            수 있는 관세환급제도는 수출기업과 제조기업의 원가절감에 매우 중요한
            역할을 하고 있으며, 기업의 활동과 자금 흐름에 막대한 영향을 미치고
            있습니다. 에이원에서는 전문적이고 체계적인 관세환급 컨설팅과 환급
            대행 서비스를 제공합니다.
            <br />
            <br />
            전문적이고 체계적인 관세환급 컨설팅과 환급 대행 서비스를 제공!!
            <br />
            <br />
            <img src={Img2} alt="" width="100%" height="auto" /> <br /> <br />
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

export default CustomAone4;
