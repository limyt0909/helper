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
const Delete = () => {
  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 쓰기 </div>

      <div class="container"></div>

      <form action="/delete/<%= model.Book_ID %>" method="post">
        <div class="form-horizontal">
          <div class="form-group row">
            <label class="col-form-label col-sm-2" for="Title">
              Title
            </label>
            <div class="col-sm-8">
              <input
                autofocus
                class="form-control"
                name="Title"
                value="<%= model.Title %>"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-2" for="Author">
              Author
            </label>
            <div class="col-sm-7">
              <input
                class="form-control"
                name="Author"
                value="<%= model.Author %>"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-2" for="Comments">
              Comments
            </label>
            <div class="col-sm-10">
              <textarea
                class="form-control"
                cols="20"
                name="Comments"
                maxlength="32000"
                rows="7"
              ></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-form-label col-sm-2"></label>
            <div class="col-sm-10">
              <input
                type="submit"
                value="Delete"
                class="btn btn-default btn-danger"
              />
              <a class="btn btn-outline-dark cancel" href="/books">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </form>
      <Bottom />
    </>
  );
};

export default Delete;
