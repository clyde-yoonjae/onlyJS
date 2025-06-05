import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 임시 HTML
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>투두리스트</title>
    </head>
    <body>
      <h1>안녕하세요! 윤재의 투두앱임니당 🎉</h1>
      <p>포트: ${PORT}</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행중입니다!`);
});
