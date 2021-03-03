const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
  res.json({
    username: '1',
  }),
);
router.get('/text', (req, res) =>
  res.json({ textname: '첫번째 게시글 입니다' }),
);
router.get('/writer', (req, res) => res.json({ writername: 'Aonecustoms' }));
router.get('/datetime', (req, res) => res.json({ datetime: '2021-02-25' }));

module.exports = router;
