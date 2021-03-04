const express = require('express');
const app = express();

const path = require('path');
const ejs = require('ejs');
const sqlite3 = require('sqlite3').verbose();

// const cors = require('cors');

const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index.js');
const cors = require('cors');
app.use(cors());
// app.use(cors());

app.use(bodyParser.json());
app.use('/api', route);

//app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});

// DB 생성 및 사용어
const db_name = path.join(__dirname, 'data', 'apptest.db');
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

const sql_create = `CREATE TABLE IF NOT EXISTS Books (
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  Title VARCHAR(100) NOT NULL,
  Author VARCHAR(100) NOT NULL, 
  DateTime real,
  Comments TEXT
);`;
const query = `
SELECT * from Books
`;

// db.run : 첫번째 파라미터로 넘어온 sql query 실행,
// 그리고 두번째 파라미터인 callback함수 실행함
db.run(sql_create, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Books' table");
});

db.run(query, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Successful query');
});

//JSON형태로 books에 쏘기 Board1 게시판에서 사용
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM Books';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

//JSON형태로 More 보기 board2게시판에서 이용중
app.get('/more', (req, res) => {
  const sql =
    'SELECT title, author, comments FROM Books where idx = ' + req.query.idx;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

//EDIT 작업중
app.get('/edit', (req, res) => {
  const sql = 'SELECT * FROM Books';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    // res.render("books", { model: rows });
    const data = {
      books: rows,
    };
    res.send(data);
  });
});

app.post('/edit', (req, res) => {
  const data = req.body;
  const idx = data.idx;
  const title = data.Title;
  const author = data.Author;
  const comments = data.Comments;
  const query = `UPDATE books SET Title='${title}', Author='${author}', Comments='${comments}' WHERE (idx=${idx});`;
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);

      return console.error(err.message);
    }

    // res.render("books", { model: rows });
    res.send('OK');
  });
});

//Create 생성 명령어
app.post('/create', (req, res) => {
  const data = req.body;
  const Title = data.Title;
  const Author = data.Author;
  const Comments = data.Comments;
  const query = `INSERT INTO Books (Title, Author, Comments, DateTime)
  VALUES ('${Title}', '${Author}', '${Comments}', date('now'));`;
  db.all(query, (err, rows) => {
    if (err) {
      res.send(err);
      return console.error(err.message);
    }
    res.send("OK")
  });
});

//POST //delete
app.post('/delete', (req, res) => {
  const data = req.body
  const idx = data.idx 
  
  const sql = `DELETE FROM Books where idx=${idx}`;
  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    res.redirect('/books');
  });
});

/*
// GET /create
app.get('/create', (req, res) => {
  const books = {
    Author: ' ',
  };
  res.render('create', { model: books });
});

// POST /create
app.post('/create', (req, res) => {
  const sql =
    "INSERT INTO Books (Title, Author, Comments, DateTime) SELECT ?, ?, ?, date('now')";
  const book = [req.body.Title, req.body.Author, req.body.Comments];
  db.run(sql, book, (err) => {
    // if (err) ...
    res.redirect('/books');
  });
});
*/
//UPDATE 쿼리
//생성쿼리INSERT INTO Books (Title, Author, Comments, DateTime) VALUES("?","?","?", "date('now')");
//삭제쿼리DELETE FROM Books where idx={?};
