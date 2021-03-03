import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/경영방침.jpg';
import Img2 from '../images/윤리헌장.png';
import Img3 from '../images/윤리.png';

import styles from './Aboutaone.module.css';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Aboutaone4 = () => {
  return (
    <>
      <Top />

      <div className={styles.title}> 경영방침 </div>
      <br />

      <div className={styles.font}>
        <div class="w3-container w3-content w3-padding-32">
          <img src={Img1} alt="경영방침" width="90%" height="auto" />
          <br />
          관세무역 에이원은 국제무역거래의 일원으로 테러방지라는 국제적 물류관리
          흐름에 동참하고 새로운 무역관행으로 대<br />
          두되고 있는 안전한 물류공급망에 적극적으로 참여하기 위하여 관세청에서
          공인하는 종합인증 우수업체(Authorized <br />
          Economic Operator) 로 공인 받아 AEO업체가 준수하여야 하는 제반 사항을
          적극적으로 시행합니다.
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-sm-5">
              <img src={Img3} alt="윤리" width="90%" height="auto" />
            </div>
            <div class="col-sm-6">
              종합인증 우수업체 공인기준에서 요구하는 사항을 준수하고 지속적인
              AEO시스템의 운영 및 관리를 통하여 건전한 내부통제 시스템을
              유지하고 관세행정 법규준수도를 제고하여 수출입통관을 원활하게 하는
              것을 목적으로 합니다.
              <br /> <br /> 경영방침을 달성하기 위하여 우리법인의 전임직원은
              AEO의 요구조건을 충족하도록 수립한 AEO운영 매뉴얼의 내용을
              이해하고 숙지하여 이에 규정된 각자의 책임을 준수하여야 합니다.
              <br />
              <br />
            </div>
          </div>
          <br /> <br />
          <div className={styles.font}>
            <h2>윤리헌장</h2>
            우리는 깨끗하고 정직한 조직문화를 바탕으로 경영이념을 실천함과
            동시에 VISON 2020실현을 위해 [윤리헌장]을
            <br />
            제정하고 이를 우리의 업무수행 및 의사결정의 판단기준으로 삼고자
            합니다.
            <br />
            <br />
            <img src={Img2} alt="윤리헌장" width="90%" height="auto" />
            <br />
            <br />
            <h2>윤리규범</h2>
          </div>
        </div>
      </div>
      <br />

      <div class="w3-container w3-content w3-padding-32">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                임직원 기본윤리
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                - 맡은 바 직무를 성실하게 수행하고, 단체생활의 필요한 질서와
                규율을 엄수한다. <br />
                <br />
                - 회사의 명예를 훼손하는 언행이나 행동은 하지 않는다.
                <br />
                <br />
                - 직무상의 기밀은 재중 중은 물론 퇴직 후라도 외부에 절대
                누설하지 않는다.
                <br />
                <br />
                - 회사의 허가 없이 회사 이외의 다른 직무를 겸하거나 영리사업에
                종사하지 않는다.
                <br />
                <br />
                - 회사와 거래관계에 있는 자로부터 부당한 사례 또는 증여를 받지
                않는다.
                <br />
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                고객만족 고객지향
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                우리는 고객만족을 최우선으로 고객의 입장에서 생각하고 행동하며,
                고객의 의견을 존중하여 만족과 감동을 주는 서비스를 제공하기 위해
                ‘고객현장’을 제정하여 실천한다.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                공정한 거래
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                - 부당한 방법으로 경쟁사의 주요정보 및 영업비밀을 취득하거나,
                경쟁사의 이익을 침해하는 일은 하지 않으며, 경쟁사에 대한 비방을
                하지 않는다. <br />
                <br />
                - 다른 회사의 사업활동 및 관습을 존중하며, 관계법령에 따라
                적법한 방법으로 거래를 행한다.
                <br />
                <br />
                - 거래를 희망하는 모든 업체에 평등한 기회를 부여하고, 공정하게
                평가하며, 우월적 지위를 이용하여 부당한 강요를 하거나 영향력을
                행사하지 않는다.
                <br />
                <br />
                - 모든 거래의 당사자들이 신뢰를 기반으로 공동의 발전을
                이룩함으로써 투명한 거래질서를 확립한다.
                <br />
                <br />
                - 혈연이나 지연, 학연 등의 특수한 관계에 의해 부당한 이익을
                제공하거나 제공받지 않는다.
                <br />
                <br />
                - 협력사의 성장을 위한 적극적인 지원을 통해 경영파트너로서의
                공동발전을 추구한다.
                <br />
                <br />
                - 모든 구성원은 정정당당한 방법으로 거래에 임하며, 선의의 경쟁
                원칙을 준수해야 한다.
                <br />
                <br />
                - 모든 거래가 자유경쟁의 원칙에 따라 상호 대등한 지위에서
                정당하고 공정하게 이루어 질 수 있도록 노력한다.
                <br />
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                회사의 특성
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                - 무역 및 물류컨설팅, 물품통관, AEO컨설팅, 통관 후 사후심사와
                행정쟁송을 일괄 처리할 수 있는 실질적인 One Stop Service
                System을 갖춘 관세법인.
                <br />
                <br />
                - 주요 공항과 항만에 지사를 설치하여 전국적 Network를 갖추고
                있는 국내 최대 규모의 관세법인.
                <br />
                <br />
                - 세관의 조사를 예방할 수 있도록 통관 후 전담 관세사를 배정하여
                사후심사 및 관리 시스템을 갖춘 관세법인.
                <br />
                <br />
                - 관세청 차장, 국장, 과장 출신 관세사와 관세사시험 합격 관세사가
                함께 경영하는 전문성을 갖춘 관세법인.
                <br />
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Bottom />
    </>
  );
};

export default Aboutaone4;
