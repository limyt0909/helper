import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Customs from '../Customs/Customs';

import Img1 from '../images/관세리스크.jpg';

import styles from './Aboutaone.module.css';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Consultation6 = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}>관세리스크</div>

      <div class="container">
        <div className={styles.margin}>
          <div className={styles.font}>
            <br />
            <img src={Img1} alt="AEO" width="100%" height="auto" />
            <br />
            급변하는 관세무역환경의 변화와 함께 우리나라 관세청의 제도와 관리가
            고도화되어 가고 있는 추세입니다. 이에 따라 기업은 관세행정 동향의
            변화를 빠르게 인지하고 정확한 관세·무역업무를 수행하여야 합니다.
            이에 더하여 과거의 수행업무에 대한 정기적인 점검을 시행하여 보유하고
            있는 관세 리스크를 도출하고 이를 제거하여 안정적 업무환경을 조성할
            필요가 있습니다. 관세법인 에이원은 국내 최고의 관세전문가로 구성된
            전문 컨설팅 조직을 보유하고 있으며, 장기간 동안 축적된 관세무역
            분야의 경험과 집약된 노하우를 바탕으로 다양한 관세 리스크 관리
            프로그램을 마련하고 이를 제공하여 효율적·안정적기업 경영환경 조성이
            가능하도록 합니다.
            <br />
            <br />
            <h2>에이원의 관세리스크 관리 프로그램!!</h2>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    01. 진단 및 리스크 관리
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    - 수출입 신고 등 관세업무의 현황 진단 및 리스크 관리방안
                    제시
                    <br />
                    <br />
                    - 관세평가, 품목분류 등 주요 통관 적법성 분야 진단 및 리스크
                    관리방안 제시
                    <br />
                    <br />
                    - 절차에 맞는 외환거래를 위한 방법 제시
                    <br />
                    <br />
                    - 환급업무의 적정성 진단 및 프로세스 적정화
                    <br />
                    <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    02. 업무 프로세스 관리
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    - 적법하고 효율적인 수출입 업무 프로세스 구축
                    <br />
                    <br />
                    - 신규 수출입업체의 무역업무 프로세스 구축
                    <br />
                    <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    03. 전문 정보 제공
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    - 관세관련 자문
                    <br />
                    <br />
                    - 관세동향·절차·제도 등 관세무역 정보 제공
                    <br />
                    <br />
                    - 관세무역 전문 교육 제공
                    <br />
                    <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
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

export default Consultation6;
