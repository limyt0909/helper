import React from 'react';
import Table from 'react-bootstrap/Table';

const Tables = () => {
  return (
    <div class="container">
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
