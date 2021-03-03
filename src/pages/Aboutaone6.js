import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/CI.png';
import styles from './Aboutaone.module.css';

const Aboutaone6 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}> C I (Corporation Identity System)</div>
      <div class="w3-container w3-content w3-padding-32">
        <div className={styles.font}>
          {' '}
          <h2> CI (Corporation Identity System)</h2>
          에이원의 로고는 전체적으로 곡선을 이용하여 제작이 되었습니다.
          로고에서의 곡선 부분은 유선형의 부드러운 곡선형태의 조합은 아름다움을
          추구하는 근본적인 이념을 나타내며, 반복되는 원형의 굴곡은 풍요화
          끝없는 번영을 나타내며 친근함을 나타냅니다. A와 1은 레이어드된
          느낌으로 표현함으로써 분열되지 않는 융합의 의미를 나타내고 있습니다.
          에이원의 로고에는 총 세 가지의 컬러가 사용됩니다. Blue-green, White,
          Blue를 사용하여 Blue-green은 Prosperity의 끝없는 번영을 나타내는 컬러
          입니다. White는 Pure의 섞이지 않는 순백을 의미하며, Blue는 Trust의
          신뢰적 유대관계를 나타냅니다.
          <br />
          <br />
          <br />
          <br />
          <img src={Img1} alt="CI" width="100%" height="auto" />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Aboutaone6;
