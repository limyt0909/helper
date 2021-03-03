import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/수입통관.png';
import Img2 from '../images/수입통관2.png';

import styles from './Aboutaone.module.css';

const CustomAone = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>수입통관</div>
      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <br />
            <br />
            <br />
            <img src={Img1} alt="수입통관" width="100%" height="auto" />
            <br />
            <br />
            관세법인 에이원은 국내 2,000여 고객사가 수입하는 전자, 기계, 화학,
            식품 등 모든 분야의 제품에 대한 통관 노하우를 축적하여 왔으며, 이를
            바탕으로 정확한 품목분류 및 세율적용은 물론 친절하고 신속한
            통관서비스를 고객사에 제공하고 있습니다.
            <br />
            <br />
            고객사별로 수입전담직원을 배치하고 업무 매뉴얼을 작성하여
            책임통관제를 실시하고 있으며, 기 통관물품에 대한 지속적인 피드백을
            통해 관세리스크를 방지함으로써 고객만족을 실현하고 있습니다. 아울러
            고객사와의 업무협의 체를 가동하여 관세 무역에 관한 수시 동향 정보 및
            정기적인 통관 리스크에 대한 리포트를 제공하는 등 상시 업무
            연락체제를 유지함으로써 급변하는 국내외 통관 환경 변화에 능동적으로
            대처하도록 지원하고 있습니다.
            <br />
            <br />
            <img src={Img2} alt="수입통관" width="100%" height="auto" />
            <br />
            <br />
            FTA확대에 따라 협정별 전문가들로 구성된 FTA전담팀에서는 통관 전에 각
            협정에서 정한 제반 요건을 검토하여 협정 세율 적용에 따른
            통관리스크를 사전에 제거하고 있습니다. 고객정보 유출방지 시스템 등
            관세리스크 해소를 위한 다양한 시스템을 구축하여 운영함은 물론 전사적
            차원의 고객관리로 고객만족보증 서비스를 제공하고 있습니다.
            <br />
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

export default CustomAone;
