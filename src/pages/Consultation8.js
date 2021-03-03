import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/지적재산권.jpg';
import Img2 from '../images/지적재산권2.jpg';

import styles from './Aboutaone.module.css';

const Consultation8 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>지적재산권</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="지적재산권" width="100%" height="auto" />
            <br /> <br />
            세관은 가짜상품의 수·출입을 방지하기 위하여 가짜상품의 통관심사를
            강화하고 있으며 상표권자가 세관에 상표를 등록하면 유사상품이 수입될
            때 상표권자에게 통보하여 진품 여부에 대한 판단 절차를 이행합니다.
            외국의 Gray Maket에서 진품을 병행 수입하는 경우에도 세관에 병행 수입
            업체로 등록하지 않는 경우에는 같은 문제가 발생합니다. 병행수입의
            경우 세관에 병행수입 업체로 등록되면 원활한 통관 절차의 이행이
            가능하고 병행수입 물품의 상표를 등록하게 되면 병행수입 물품에 세관이
            보증하는 수입 통관증지를 부착하여 진품으로 판매할 수가 있습니다.
            <br /> <br />{' '}
            <img src={Img2} alt="지적재산권2" width="100%" height="auto" />
            <br />
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

export default Consultation8;
