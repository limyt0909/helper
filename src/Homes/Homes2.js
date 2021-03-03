import React from 'react';

import Img1 from '../images/quick1.jpg';
import Img2 from '../images/quick2.jpg';
import Img3 from '../images/quick3.jpg';
import Img4 from '../images/quick4.jpg';

import Navbar from 'react-bootstrap/Navbar';

import styles from './Homes.module.css';

import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import FigureCaption from 'react-bootstrap/FigureCaption';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Homes2 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

      <div className={styles.back}>
        <Container>
          <Row>
            <Col sm={3}>
              {' '}
              <Figure>
                <Navbar.Brand href="/Resources2">
                  <Image src={Img1} roundedCircle width="100%" height="auto" />
                </Navbar.Brand>
                <Figure.Caption>관세무역 자료실</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={3}>
              {' '}
              <Figure>
                <Navbar.Brand href="/Resources4">
                  <Image src={Img2} roundedCircle width="100%" height="auto" />
                </Navbar.Brand>
                <Figure.Caption>유관기관 안내</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={3}>
              {' '}
              <Figure>
                <Navbar.Brand href="/Education2">
                  <Image src={Img3} roundedCircle width="100%" height="auto" />
                </Navbar.Brand>

                <Figure.Caption>교육일정 관리 </Figure.Caption>
              </Figure>
            </Col>
            <Col sm={3}>
              {' '}
              <Figure>
                {' '}
                <Navbar.Brand href="/Resources">
                  <Image src={Img4} roundedCircle width="100%" height="auto" />{' '}
                </Navbar.Brand>
                <Figure.Caption>관세무역 뉴스</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homes2;
