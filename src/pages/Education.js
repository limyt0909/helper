import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/e-learning.jpg';
import Img2 from '../images/e-1.jpg';

import Img3 from '../images/e-2.jpg';
import Img4 from '../images/e-3.jpg';

import Img5 from '../images/e-4.jpg';
import Img6 from '../images/e-5.jpg';

import styles from './Aboutaone.module.css';

const Education = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>E-Learning</div>
      <div class="w3-container w3-content w3-padding-16">
        {' '}
        <div className={styles.margin}>
          <div className={styles.font}>
            <h2>E-Learning</h2>
            <br />
            <img src={Img1} alt="E-learning" width="100%" height="auto" />
            <br /> <br />
            <br />
            관세법인 에이원의 E-learning 서비스는 “Trade Insight”라는 명칭으로
            관세법인 에이원의 각 분야의 전문 관세사들이 모여 깊이 있고 다양한
            사례를 분석하여 실무에 활용도가 높은 교육을 진행하는 On-Line
            교육입니다. AEO과정, 통관과정, FTA과정(초급, 심화)응 세분화하여 각
            분야별 전문 관세사들이 직접 실무의 경험을 사례로 제시하여 보다
            현실적이며 정확한 정보를 들으실 수 있습니다. 업계의 최초로 시행된
            On-Line강의! 언제 어디서든 간편하고 쉽게 수강하실 수 있습니다.
            <br /> <br /> <br />
            <div class="row">
              <div class="col-12">
                <hr />
              </div>
              <div class="col-sm-6">
                <img src={Img2} width="100%" height="auto" alt="" />
              </div>
              <div class="col-sm-6">
                <div className={styles.education}>
                  AEO공인 취득 및 관리의 이해
                </div>{' '}
                <br />
                <div className={styles.education2}>
                  AEO 과정은 AEO 공인을 취득하고 유지관리하기 위해 기업이 알아야
                  하는 내부통제 및 안전관리 등 각 분야의 가이드라인 및 사례를
                  기준으로 AEO 공인인증을 취득하고 싶은 기업에게 도움이 되는
                  과정입니다.
                </div>
              </div>
              <div class="col-12">
                <hr />
              </div>
              <div className={styles.education}>
                통관적법성의 이해 [초급과정], [심화과정]
              </div>
              <br />
              <div className={styles.education2}>
                {' '}
                <br />
                통관적법성의 이해 과정은 초급과정과 심화과정 두 개의 과정으로
                구분되어 있습니다. 통관적법성의 이해에서는 수출입 업무의
                정확성과 적법성을 위하여 알아야 하는 관세관련 법령과 사례를
                중심으로 학습이 이루어져 있습니다. 수출입 기업에 있어 실무적으로
                많은 도움이 될 수 있는 교육 과정입니다.
              </div>{' '}
              <br />
              <div class="col-sm-6">
                {' '}
                <br />
                <img src={Img3} width="100%" height="auto" alt="" />
              </div>
              <div class="col-sm-6">
                {' '}
                <br /> <img src={Img4} alt="e-3" width="100%" height="auto" />
              </div>
              <div class="col-12">
                <hr />
              </div>
              <div className={styles.education}>
                FTA 이해와 실무 [초급과정], [심화과정]
                <br />
              </div>{' '}
              <div className={styles.education2}>
                <br />
                FTA 이해와 실무는 초급과정, 심화과정 두 과정으로 나누어
                초급과정에서는 FTA의 원활한 적용을 위하여 수출입 기업이 알아야
                하는 기본사항을 이론과 사례를 접목하여 학습하는 과정입니다. FTA
                이해와 실무의 심화과정은 FTA를 보다 효율적으로 이해하고 적용하기
                위해 이론과 사례를 깊이 있게 학습하는 전문화 과정입니다.
              </div>
              <div class="col-sm-6">
                <br /> <br />
                <img src={Img5} width="100%" height="auto" alt="" />
              </div>
              <div class="col-sm-6">
                <br /> <br />{' '}
                <img src={Img6} alt="e-3" width="100%" height="auto" />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Education;
