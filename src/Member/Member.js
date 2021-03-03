import React from 'react';

import Img11 from '../images/team_005.jpg';
import Img12 from '../images/team_002.jpg';
import Img13 from '../images/team_003.jpg';
import Img14 from '../images/team_006.jpg';
import Img15 from '../images/team_008.jpg';

import styles from '../pages/Aboutaone.module.css';

const Member = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <div className={styles.title}>구성원 소개</div>
      <div class="w3-container w3-content w3-padding-32">
        <h2>임원진 소개</h2>
        <div class="row">
          <div class="col-12">
            <hr />
          </div>
          <div class="col-sm-6">
            <img src={Img11} width="75%" height="auto" alt="정운기회장님" />
          </div>
          <div class="col-sm-3">
            <div className={styles.map}>정운기 회장</div>
            <div className={styles.card}>
              *e-Mail woonki121@aounecustoms.com <br />
              <br />
              <h2>주요 경력</h2>
              <br />제 17회 행정고시 합격, 목포세관장, 제주 세관장
              <br />
              관세청 비서관, 총괄징수과장, 심리과장 <br />주 홍콩 총영사관 영사
              <br /> 관세청 관세중앙분석소장(부이사관)
              <br />
              주미 한국대사관 관세참사관(이사관) <br />
              김포세관장(이사관)
              <br /> 한국관세무역개발원 이사장 <br />
              관우회 이사장(3년 임기만료) <br />
              한국관세학회 고문(현재),한국관세학회 부회장
              <br /> 관세청 관세행정발전 자문위원, 재경부 FIU 자문위원
              <br /> 관세청 초일류세관추진위원회 위원 <br />
              관세법인 에이원 대표(현재)
              <br /> 케이티넷 고객만족위원회 위원장 <br />
              한국관세사회 회장(2년 임기만료)
              <br /> 한국무역관련지식재산권협회 자문위원(현재)
              <br /> 법원 전문심사관, 세정신문 논설위원(현재)
              <br />
              한국AEO진흥협회부회장(현재)
              <br /> 관세발전 실무위원회 자문위원(현재)
              <br />
              관세행정발전심의위원회 회원(현재)
              <br /> 유네스코 한국위원회 홍보개발위원(현재)
            </div>
          </div>
          <div class="col-sm-3">
            <div className={styles.card}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>학력</h2>
              <br /> 2009.08 서울대학교 자연과학대학 과학기술혁신최고전략과정
              수료
              <br /> 2001.08 서울대학교 행정대학원 국가정책과정 수료
              <br /> 1963.12 경희대학교 법과대학 졸업
              <br /> 1959.02 전주고등학교 졸업
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <hr />
          </div>
          <div class="col-sm-6">
            <img src={Img12} width="75%" height="auto" alt="황재호 부대표" />
          </div>
          <div class="col-sm-3">
            <div className={styles.map}>황재호 부대표</div>
            <div className={styles.card}>
              *e-Mail ezpss@aonecustoms.com <br />
              <h2>주요 경력</h2> <br />
              고려종합국제운송 에이원 <br />
              무역관세사법인 에이원 <br /> 무역관세사법인 재직(現관세법인에이원){' '}
              <br />
              관세법인 에이원인천권총괄본부장 <br />
            </div>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-sm-6">
            <img src={Img15} width="75%" height="auto" alt="정철 부대표" />
          </div>
          <div class="col-sm-3">
            <div className={styles.map}>정철 부대표</div>
            <div className={styles.card}>
              *e-Mail jch@aonecustoms.com
              <br />
              <h2>주요 경력</h2> 관세법인 에이원 기업컨설팅 본부 총괄사업본부장{' '}
              <br />
              한국무역협회 시소러스팀 <br />
              한국관세사회 기업자율심사 교수 <br />
              관세청 심사행정 발전 민관협의회 위원 <br />
              기획재정부 관세전문가 위원 <br />
              관세청 이전가격 제도개선 외부위원 <br />
              現관세평가분류원 품목분류협의회 위원 <br />
              現 인천공항세관 특송업체 심사위원회 위원 <br />
              現 한국관세사회 업무침해특별감시 위원 <br />
              기획재정부장관 표창(2011) <br />
              관세평가분류원장 표창(2011) <br />
              관세청장 표창(2010) <br />
              서울세관장 표창(2008) <br />
            </div>
          </div>
          <div class="col-sm-3">
            <div className={styles.card}>
              <br />
              <br />
              <br />
              <br />
              <h2>학력</h2>
              서울대학교 자연과학대학 과학기술전략 경영자과정
            </div>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-sm-6">
            <img src={Img14} width="75%" height="auto" alt="박찬욱 부대표" />
          </div>
          <div class="col-sm-3">
            <div className={styles.map}>박찬욱 부대표</div>
            <div className={styles.card}>
              *e-Mail cupark@aonecustoms.com <br /> <h2>주요 경력</h2>관세법인
              에이원 인천공항지사 통관팀장 <br /> 인천지사장 및 해상사업본부장{' '}
              <br />
              기획총괄본부장 <br /> FTA 전략지원본부장 및 중부권통관사업본부장{' '}
              <br />
              수도권총괄본부장 <br /> 무역협회 FTA 협력지원단장 <br /> 구로공단
              무역/통관 자문위원 <br /> 관세청 CRM 자문위원 <br /> 벤쳐기업협회
              자문관세사 <br /> 서울중소기업청 자문관세사 <br /> 관세청장 표창
              (2011) <br /> FTA 컨설팅 인증관세사 (2012, 한국원산지정보원){' '}
              <br /> FTA 컨설턴트 (2011, 서울산업통상진흥원) <br /> AEO
              경영컨설턴트 (2010, 관세청) <br /> 자율심사인증관세사(2006,
              관세청) <br /> *학력 서울대학교 과학기술혁신 최고전략과정 이수
            </div>
          </div>
          <div class="col-sm-3">
            <div className={styles.card}>
              <br />
              <br />
              <br />
              <br />
              <h2>학력</h2>
              서울대학교 과학기술혁신 최고전략과정 이수
            </div>
          </div>
          <div class="col-12">
            <hr />
          </div>
          <div class="col-sm-6">
            <img src={Img13} width="75%" height="auto" alt="이성욱 부대표" />
          </div>
          <div class="col-sm-3">
            <div className={styles.map}>이성욱 부대표</div>
            <div className={styles.card}>
              *e-Mail tnt-2000@aonecustoms.com
              <br />
              <h2>주요 경력</h2>
              에이원 무역관세사법인 해상사업부문 부문장
              <br />
              관세법인에이원 검역본부장
              <br />
              관세법인에이원 물류검역총괄본부장
              <br />
              관세법인에이원 남부권 제2권역 총괄본부장
              <br />
            </div>
          </div>
          <div class="col-sm-3">
            <div className={styles.card}>
              <br />
              <br />
              <br />
              <br />
              <h2>학력</h2>
              부경대학교 산업대학원 식품공학과 석사과정 <br />
              해양수산부 항만물류 최고경영자 과정 <br />
              성균관대학교 문과대학
            </div>
          </div>{' '}
        </div>

        <br />
      </div>
      <br /> <br /> <br /> <br />
    </>
  );
};

export default Member;
