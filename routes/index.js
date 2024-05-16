
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.post('/api/posts', (req, res) => {
  const { content } = req.body;
  posts.push({ content });
  console.log('새로운 글이 작성되었습니다:', content);
  res.json({ message: '글이 성공적으로 작성되었습니다.' });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
