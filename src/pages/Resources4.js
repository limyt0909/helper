import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import Img1 from '../images/유관기관.jpg';
import Img2 from '../images/유관기관2.png';
import Img3 from '../images/유관기관3.png';

import styles from './Aboutaone.module.css';

const Resources4 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>유관기관 안내 </div>
      <div class="w3-container w3-content w3-padding-32">
        <img src={Img1} width="100%" height="auto" alt="유관기관" /> <br />
        <br />
        <div class="row">
          <div class="col-6">
            <div class="text">
              <h6>국가기관</h6>
            </div>
            <ul class="jobs">
              <li>
                <a href="http://www.mosf.go.kr">기획재정부</a>
              </li>
              <li>
                <a href="http://www.krima.or.kr">평가연구원</a>
              </li>
              <li>
                <a href="http://www.motie.go.kr">산업통상자원부</a>
              </li>
              <li>
                <a href="http://www.customs.go.kr">관세청</a>
              </li>
              <li>
                <a href="http://www.korcham.net">대한상공회의소</a>
              </li>
              <li>
                <a href="http://www.kctdi.or.kr">한국관세무역개발원</a>
              </li>
              <li>
                <a href="http://www.mof.go.kr">해양수산부</a>
              </li>
              <li>
                <a href="http://www.nts.go.kr">국세청</a>
              </li>
              <li>
                <a href="http://www.smba.go.kr">중소벤처기업부</a>
              </li>
              <li>
                <a href="http://www.better.go.kr">규제개혁위원회</a>
              </li>
            </ul>
          </div>
          <div class="col-6">
            {' '}
            <h6>본부세관</h6>
            <ul class="jobs">
              <li>
                <a href="https://www.customs.go.kr/seoul/">서울본부세관</a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/kcshome/site/index.do?layoutSiteId=kimpo">
                  김포공항세관
                </a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/kcshome/site/index.do?layoutSiteId=incheon">
                  인천본부세관
                </a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/kcshome/site/index.do?layoutSiteId=airport_post">
                  인천공항국제우편세관
                </a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/gwangju/">광주본부세관</a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/deagu/">대구본부세관</a>
              </li>
              <li>
                <a href="https://www.customs.go.kr/busan/">부산본부세관</a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <hr />
          </div>

          <div class="col-6">
            {' '}
            <h6>협회</h6>
            <ul class="jobs">
              <li>
                <a href="http://www.kcba.or.kr">한국관세사회</a>
              </li>
              <li>
                <a href="http://www.kita.net">한국무역협회</a>
              </li>
              <li>
                <a href="http://www.krsc.or.kr">한국관세학회</a>
              </li>
              <li>
                <a href="http://www.kotra.or.kr">대한무역투자진흥공사</a>
              </li>
            </ul>
          </div>
          <div class="col-6">
            {' '}
            <h6>검역</h6>
            <ul class="jobs">
              <li>
                <a href="http://www.qia.go.kr">농림축산검역본부</a>
              </li>
              <li>
                <a href="http://www.mafra.go.kr">농림축산식품부</a>
              </li>
              <li>
                <a href="http://www.mfds.go.kr">식품의약품안전처</a>
              </li>
              <li>
                <a href="http://blog.naver.com/pridenvrqs">
                  국립수의과학검역원
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <hr />
          </div>

          <div class="col-6">
            <h6>AEO</h6>
            <ul class="jobs">
              <li>
                <a href="http://www.aeo.or.kr">한국AEO진흥협회</a>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <h6>FTA</h6>
            <ul class="jobs">
              <li>
                <a href="https://www.fta.go.kr/main/">FTA 종합지원 포털</a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-6">
            {' '}
            <h6>법률</h6>
            <ul class="jobs">
              <li>
                <a href="http://gwanbo.mois.go.kr">대한민국전자관보</a>
              </li>
              <li>
                <a href="http://www.moleg.go.kr">법제처</a>
              </li>
              <li>
                <a href="http://www.law.go.kr">법제처 국가법령정보센터</a>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <h6>정보</h6>
            <ul class="jobs">
              <li>
                <a href="http://taxtimes.co.kr">세정신문</a>
              </li>
              <li>
                <a href="http://www.joseilbo.com">조세일보</a>
              </li>
              <li>
                <a href="http://www.clhs.co.kr">씨엘HS</a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <hr />
          </div>

          <div class="col-6">
            <h6>국제기관</h6>
            <ul class="jobs">
              <li>
                <a href="http://www.wcoomd.org">세계관세기구</a>
              </li>
              <li>
                <a href="http://www.tiaca.org">국제항공화물협회</a>
              </li>
              <li>
                <a href="http://www.icao.int">국제민간항공기구 ICAO</a>
              </li>
              <li>
                <a href="http://www.wto.org">세계무역기구</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Resources4;
