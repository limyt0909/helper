import React from 'react';

import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from './Aboutaone.module.css';
import History from '../History/History';

const Home = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}> 연혁 </div>
      <br />
      <div className={styles.font}>
        <div class="w3-container w3-content w3-padding-32">
          관세법인 에이원은 젊고 활기찹니다. 탁월한 서비스와 고객만족으로 2001년
          회사 창립이래 10여년 만에 관세법인 에이원은 관세무역 서비스 분야의
          최초, 최고의 자리를 늘 섭렵해 왔습니다. 짧은 기간 동안 이룩한 이러한
          성과는 뛰어난 전문 관세사를 알아보고 육성하는 훌륭한 고객사들이
          함께했기 때문에 가능했습니다.
        </div>
        <History />
        <br />
        <br />
        <br />
        <Bottom />
      </div>{' '}
    </div>
  );
};

export default Home;
