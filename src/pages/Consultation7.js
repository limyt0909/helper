import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/외환거래.jpg';
import Img2 from '../images/외환거래2.jpg';

import styles from './Aboutaone.module.css';

const Consultation7 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>외환거래</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="외환거래" width="100%" height="auto" />
            <br /> <br />
            물품의 수출·입과 해외투자에 필수적으로 수반하는 외환거래이므로
            외환거래 취급업무는 전문성과 상당한 주의가 필요한 업무입니다.
            <br /> <br />
            관세청은 외환거래에 대한 검사권과 조사권을 갖고 외환거래에 대한
            조사를 강화하고 있으며 세관의 기업심사 팀에서도 외환심사를 강화하고
            있습니다. 그러나 많은 기업들은 대기업이든 중소기업이든 외환거래에
            대한 전문 지식없이 외환업무를 처리하다보니 세관조사 또는 심사 시에
            대체로 외환거래법 위반 사례가 적발 되곤 합니다.
            <br /> <br />
            외화를 해외로 도피시키는 자본유출의 경우도 적발되기도 하지만
            대부분은 외환취급 담당자의 부주의에 의한 절차위반사례 등이 더 많이
            적발되고있습니다. 수출대금의 기간 내 미회수, 수입대금의 제3자 지급,
            또는 무단상계처리 등 절차위반 경우가 많이 발생하고 있습니다.
            <br /> <br /> <br />{' '}
            <img src={Img2} alt="외환거래2" width="100%" height="auto" />
            <br />
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

export default Consultation7;
