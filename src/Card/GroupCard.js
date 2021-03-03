import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import React from 'react';
import styles from './Card.module.css';

import Card1 from '../images/정운기회장.png';
import Card2 from '../images/사진2.jpg';
import Card3 from '../images/사진3.jpg';

const GroupCard = () => {
  return (
    <>
      <div className={styles.card}>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Card1} alt="사진/100px160" />
            <Card.Body>
              <Card.Text>
                *e-Mail woonki121@aounecustoms.com <br />
                <br />
                <h2>주요 경력</h2>
                <br />제 17회 행정고시 합격, 목포세관장, 제주 세관장
                <br />
                관세청 비서관, 총괄징수과장, 심리과장 <br />주 홍콩 총영사관
                영사
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
                <br /> 유네스코 한국위원회 홍보개발위원(현재) <br />
                <br />
                <h2>학력</h2>
                <br /> 2009.08 서울대학교 자연과학대학 과학기술혁신최고전략과정
                수료
                <br /> 2001.08 서울대학교 행정대학원 국가정책과정 수료
                <br /> 1963.12 경희대학교 법과대학 졸업
                <br /> 1959.02 전주고등학교 졸업
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Card2} alt="사진2/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Card3} alt="사진3/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

export default GroupCard;
