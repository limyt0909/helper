import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import queryString from 'query-string';
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

const Edit2 = () => {
  const history = useHistory()
  const [data, setData] = useState([]);
  const [booksNo, setBooksNo] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState('');
  const location = window.location.href.split('?');
  const displayBook = (book) => {
    if (book.length === 0) return;
    book.forEach((key, value) => {
      const Comments = document.getElementById('Comments');
      const Title = document.getElementById('Title');
      const Author = document.getElementById('Author');
      setTitle(key.Title);
      setAuthor(key.Author);
      setComments(key.Comments);
      Title.value = key.Title;
      Author.value = key.Author;
      Comments.value = key.Comments;
    });
  };

  const handleOnChange = (event) => {
    const { className, value } = event.target;
    console.log(className,value);
    if (className === 'Title') {
      setTitle(value);
    }
    if (className === 'Author') {
      setAuthor(value);
    }
    if (className === 'Comments') {
      setComments(value);
    }
  };


  useEffect(() => {
    if (location.length <= 1) return;
    const idx = location[1].split('=')[1];
    setBooksNo(idx);
    axios.get(`http://localhost:3001/more?idx=${idx}`).then((res) => {
      const books = res.data.books;
      displayBook(books);
      //  const books = {"books":[{"idx":2,"Book_ID":2,"Title":"두번째 게시글 입니다 title이 어디까지갈까ㅇ요요요요요요요용용","Author":"용택2","DateTime":"2021-02-19","Comments":"ㅇ용"},{"idx":1,"Book_ID":1,"Title":"첫번째 게시글인데 ","Author":"용택","DateTime":"2021-02-19","Comments":"testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}]}
      // setData(books);
    });
  }, []);

  const update = () => {
    const TitleElem = document.getElementById('Title')
    const AuthorElem = document.getElementById('Author')
    const CommentsElem = document.getElementById('Comments')
    let TitleModify = TitleElem.value;
    let AuthorModify = AuthorElem.value;
    let CommentsModify = CommentsElem.value;
    const updateData = {
      idx: booksNo,
      Title: TitleModify,
      Author: AuthorModify,
      Comments: CommentsModify,
    };
    axios.post('http://localhost:3001/edit', updateData).then(
      history.push('/board2')
    );
  };
  const handleDelete = () => {
    console.log("Delete Function")
    const data = {
      idx : booksNo
    }
    axios.post("http://localhost:3001/delete",data).then(res=>{
      history.push('/board2')
    })
  }
  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 수정 </div>
      <text />{' '}
      <div class="container">
        <h1>Edit</h1>

        <tagbox />
        <form>
          <div class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Title">
                Title
              </label>
              <div class="col-sm-8">
                <input
                  readonly
                  className="Title"
                  id="Title"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Author">
                Author
              </label>
              <div class="col-sm-7">
                <input
                  readonly
                  className="form-control-plaintext Author"
                  id="Author"
                  values="<titles></titles>"
                  onChange={handleOnChange}

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
                  className="form-control-plaintext Comments"
                  cols="20"
                  id="Comments"
                  maxlength="32000"
                  rows="7"
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-default btn-warning"
                  onClick={update}
                />
                <a href="/board2" class="btn btn-outline-dark cancel">
                  Back
                </a>
                <a onClick={handleDelete} class="btn btn-outline-dark cancel">
                  Delete
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

export default Edit2;
