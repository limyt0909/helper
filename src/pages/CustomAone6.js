import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/검역확인.jpg';
import styles from './Aboutaone.module.css';

import Customs from '../Customs/Customs';

const CustomAone6 = () => {
  return (
    <div>
      <Top />

      <div className={styles.title}>검역확인</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            국내에 유통되는 물품에는 각각의 개별법에서 요구하는 요건을 충족해야
            합니다. 수입물품은 수입 통관시 반드시 세관장이 확인해야 하는 요건이
            있고 수입 통관 후에 관계 기관에 요건 확인을 받아야 하는 경우도
            있습니다.
            <br />
            <br />
            관세청은 관계부처와 협의하여 수입 통관 전에 세관장이 확인해야 할
            요건 내용과 물품을 정하여 고시하고 세관에서는 이들 물품에 대하여는
            수입 통관 전에 각 개별법에서 정한 요건을 확인하고 있습니다. 요건을
            충족하지 않고 수입 통관하거나 국내에 유통을 하는 경우 각각의
            개별법에 의하여 처벌을 받게 되므로 수입물품에 대한 요건 확인 업무는
            중요한 업무입니다.
            <br />
            <br />
            관세법인 에이원은 수입신고 전에 세관장 확인대상 물품 여부에 대하여
            검토하여 세관장 확인대상 물품에 대하여는 모든 요건을 갖추어 세관장
            확인을 받고 있으며, 요건 확인 전문가들이 많은 경험과 노하우를
            활용하여 도와 드리겠습니다.
            <img src={Img1} alt="" width="100%" height="auto" />
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

export default CustomAone6;
