import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import styles from '../pages/Aboutaone.module.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>;

class board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    fetch('api')
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
    fetch('api/text')
      .then((res) => res.json())
      .then((data) => this.setState({ textname: data.textname }));
    fetch('api/writer')
      .then((res) => res.json())
      .then((data) => this.setState({ writername: data.writername }));
    fetch('api/datetime')
      .then((res) => res.json())
      .then((data) => this.setState({ datetime: data.datetime }));
  }

  render() {
    const { username } = this.state;
    const { textname } = this.state;
    const { writername } = this.state;
    const { datetime } = this.state;

    return (
      <>
        <Top />
        <div className={styles.title}> 게시판 </div>
        <div class="container">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />

          <div className="App">
            <ul>
              <div class="table-responsive-sm">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                      <th class="d-print-none">
                        <a class="btn btn-sm btn-success" href="/create">
                          Create
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> {username ? `${username}` : 'te2'}</td>
                      <td>
                        {' '}
                        {textname ? `${textname}` : '첫번째 게시글 입니다'}
                      </td>
                      <td> {writername ? `${writername}` : 'AoneCustoms'}</td>
                      <td> {datetime ? `${datetime}` : '2021-03-02'}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>두번째 게시글 입니다</td>
                      <td>Aonecustoms</td>
                      <td>2021-02-27</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>3</td>
                      <td>세번째 게시글 입니다</td>
                      <td>Aonecustoms</td>
                      <td>2021-02-28</td>
                    </tr>
                  </tbody>{' '}
                  <tbody>
                    <tr>
                      <td>4</td>
                      <td>네번째 게시글 입니다</td>
                      <td>Aonecustoms</td>
                      <td>2021-03-01</td>
                    </tr>
                  </tbody>{' '}
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>다섯번째 게시글 입니다</td>
                      <td>Aonecustoms</td>
                      <td>2021-03-02</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ul>
          </div>
        </div>
        <Bottom />{' '}
      </>
    );
  }
}

export default board;
