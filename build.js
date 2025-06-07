// ===== index.html 생성 스크립트 =====
import fs from "fs";

function generateHTML() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>두 개 useState 테스트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
    }
    .test-component {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    button {
      margin: 5px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background: #007bff;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>두 개 useState 테스트 🧪</h1>

  <div id="root"></div>

  <script type="module">
    import { render, useState } from './lib/react.js';

    // 두 개의 useState를 사용하는 컴포넌트
    function DoubleStateComponent() {
      const [count, setCount] = useState(0);      // 첫 번째 useState
      const [name, setName] = useState('안녕');   // 두 번째 useState

      console.log('🔄 컴포넌트 실행 - count:', count, 'name:', name);

      return {
        tag: 'div',
        props: { className: 'test-component' },
        children: [
          {
            tag: 'h2',
            children: ['두 개 useState 테스트']
          },
          {
            tag: 'p',
            children: [\`카운트: \${count}\`]  // ✅ 올바른 템플릿 리터럴
          },
          {
            tag: 'p', 
            children: [\`이름: \${name}\`]    // ✅ 올바른 템플릿 리터럴
          },
          {
            tag: 'button',
            props: {
              onClick: () => {
                console.log('카운트 증가 버튼 클릭');
                setCount(count + 1);
              }
            },
            children: ['카운트 +1']
          },
          {
            tag: 'button',
            props: {
              onClick: () => {
                console.log('이름 변경 버튼 클릭');
                setName(name === '안녕' ? '바이' : '안녕');
              }
            },
            children: ['이름 변경']
          }
        ]
      };
    }

    // 렌더링
    const container = document.getElementById('root');
    render(DoubleStateComponent, container);

  </script>
</body>
</html>
  `;
}

const html = generateHTML();
fs.writeFileSync("index.html", html);
console.log("✅ 두 개 useState 테스트 파일 생성 완료!");
