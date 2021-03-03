import React from 'react';

import Img1_1 from '../images/손영희.jpg';
import Img1_2 from '../images/한길림3.jpg';
import Img1_3 from '../images/오영록.jpg';
import Img1_4 from '../images/이재영.jpg';

import Img2_1 from '../images/손은정1.jpeg';
import Img2_3 from '../images/강태인1.jpg';
import Img2_4 from '../images/김도환1.jpg';
import Img2_5 from '../images/하창길1.jpg';

import Img3_1 from '../images/송윤규1.jpg';
import Img3_2 from '../images/임항섭1.jpg';
import Img3_3 from '../images/김교일1.jpg';

import Img3_4 from '../images/김의걸1.jpg';
import Img3_5 from '../images/어대경1.jpg';
import Img3_6 from '../images/송영규1.jpg';

import Img4_1 from '../images/정광석1.jpg';
import Img4_2 from '../images/조동백1.jpg';
import Img4_3 from '../images/정성락1.jpg';
import Img4_4 from '../images/정동열1.jpg';

import Img5_1 from '../images/이신재1.png';
import Img5_2 from '../images/장희석1.jpg';

import Img6_1 from '../images/신민화1.jpg';

import Img4 from '../images/message.png';

import styles from './member.css';

const Members = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      ></link>
      <link rel="stylesheet" type="text/css" href="css/app.css" />

      <div class="container">
        <h2>컨설팅총괄본부</h2>
      </div>

      <div class="container">
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img1_3} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">컨설팅사업본부 본부장</p>

                    <p class="username">오영록</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img1_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">컨설팅총괄본부 본부장</p>

                    <p class="username">손영희</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img1_4} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">컨설팅사업본부 팀장</p>
                    <p class="username">이재영</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img1_2} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">컨설팅사업부문 팀장</p>
                    <p class="username">한길림</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="container">
        <h2>수도권</h2>
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img2_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">일반통관본부 본부장</p>

                    <p class="username">손은정</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img2_3} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">평택지점 지점장</p>

                    <p class="username">강태인</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img2_4} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">안양지점 지점장</p>
                    <p class="username">김도환</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img2_5} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">전략지원팀 팀장</p>
                    <p class="username">하창길</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div class="container">
        <h2>인천권</h2>
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">인천총괄본부 본부장</p>

                    <p class="username">송윤규</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_2} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">인천총괄본부 관세사</p>

                    <p class="username">임항섭</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_3} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">인천총괄본부 부문장</p>
                    <p class="username">김교일</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_4} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">일반통관팀 팀장</p>
                    <p class="username">김의걸</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_5} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">검역통관팀 팀장</p>

                    <p class="username">어대경</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
              　　　　　　　　
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img3_6} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">특송송관팀 팀장</p>

                    <p class="username">송영규</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="container">
        <h2>남부1권역</h2>
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img4_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">부산지점 팀장</p>

                    <p class="username">정광석</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img4_2} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">창원지점 지점장</p>

                    <p class="username">조동백</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>

              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img4_3} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">구미지점 부문장</p>
                    <p class="username">정성락</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img4_4} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">검역통관사업 부문장</p>
                    <p class="username">정동열</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="container">
        <h2>남부2권역</h2>
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img5_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">울산지점 지점장</p>

                    <p class="username">이신재</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
              　　　　　　　
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img5_2} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">여수지점 지점장</p>

                    <p class="username">장희석</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="container">
        <h2>혁신전략본부</h2>
        <div class={styles}>
          <div class="row">
            <div class="card-group">
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img1_3} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">혁신전략본부 본부장</p>

                    <p class="username">오영록</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
              　　　　　　　
              <div class="col-xs-6 col-sm-3">
                <div class="card1">
                  <div class="card1-header">
                    <img src={Img6_1} alt="Profile Image" class="profile-img" />
                  </div>
                  <div class="card1-body">
                    <p class="full-name">VALUE혁신팀 팀장</p>

                    <p class="username">신민화</p>
                    <img src={Img4} />
                    <a href="mailto:aone-trade@aonecustoms.com">Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Members;
