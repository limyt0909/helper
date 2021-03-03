import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import styles from './Aboutaone.module.css';

const inquiry = () => {
  return (
    <div>
      <Top />
      <div className={styles.down}>쿼리 </div>
      <div class="container">
        <br />
        <br />

        <br />
        <br />
      </div>
      <Bottom />
    </div>
  );
};

export default inquiry;
