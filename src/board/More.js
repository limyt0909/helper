import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';

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

const More = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/more?idx=1').then((res) => {
      const books = res.data.books;
      //  const books = {"books":[{"idx":2,"Book_ID":2,"Title":"두번째 게시글 입니다 title이 어디까지갈까ㅇ요요요요요요요용용","Author":"용택2","DateTime":"2021-02-19","Comments":"ㅇ용"},{"idx":1,"Book_ID":1,"Title":"첫번째 게시글인데 ","Author":"용택","DateTime":"2021-02-19","Comments":"testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}]}
      setData(books);
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    const tagbox = document.querySelector('tagbox');
    data.forEach((key, value) => {
      const tag = document.createElement('tag');

      const comments = document.createElement('tag');
      const Title = document.createElement('tag');
      const Author = document.createElement('tag');

      Title.innerHTML = key.Title;
      Author.innerHTML = key.Author;
      comments.innerHTML = key.comments;

      tagbox.appendChild(tag);
    });
  }, [data]);

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 보기 </div>
      <text />{' '}
      <div class="container">
        <h1>Read</h1>

        <tagbox />
        <form action="/more/<%= model.Book_ID %>">
          <div class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Title">
                Title
              </label>
              <div class="col-sm-8">
                <input readonly class="form-control-plaintext" id="Title" />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Author">
                Author
              </label>
              <div class="col-sm-7">
                <input
                  readonly
                  class="form-control-plaintext"
                  id="Author"
                  values="<titles></titles>"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Comments">
                Comments
              </label>
              <div class="col-sm-10">
                <textarea
                  readonly
                  class="form-control-plaintext"
                  cols="20"
                  id="Comments"
                  maxlength="32000"
                  rows="7"
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10">
                <a href="/board2" class="btn btn-outline-dark cancel">
                  Back
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Bottom />
    </>
  );
};

export default More;
