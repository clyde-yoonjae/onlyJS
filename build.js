import fs from 'fs';

function generateHTML() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>투두리스트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
    }
    h1 {
      color: #333;
      text-align: center;
    }
    .test-section {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>윤재의 React 테스트 🚀</h1>
  
  <div class="test-section">
    <h3>useState 테스트</h3>
    <p>개발자 도구 콘솔을 확인하세요!</p>
    <button id="test-btn">useState 테스트 실행</button>
  </div>
  
  <div id="root"></div>
  
  <script type="module">
    import { useState, testUseState } from './lib/react.js';
    
    console.log('🎯 React 라이브러리 로드 완료!');
    
    // 버튼 클릭 시 테스트 실행
    document.getElementById('test-btn').addEventListener('click', () => {
      console.log('--- useState 테스트 시작 ---');
      testUseState();
    });
    
    // 페이지 로드 시 자동 테스트
    console.log('--- 자동 테스트 시작 ---');
    testUseState();
  </script>
</body>
</html>
  `;
}

// HTML 파일 생성
const html = generateHTML();
fs.writeFileSync('index.html', html);
console.log('✅ index.html 파일이 생성되었습니다!');
