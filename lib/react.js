// 훅 관리를 위한 전역 변수들
let currentComponent = null;
let hookIndex = 0;
let hooks = [];

// useState 구현
export function useState(initialValue) {
  const currentIndex = hookIndex++;

  // 첫 실행이면 초기값 저장
  if (hooks[currentIndex] === undefined) {
    hooks[currentIndex] = initialValue;
  }

  const setState = (newValue) => {
    hooks[currentIndex] = newValue;
    // 컴포넌트 다시 렌더링
    render();
  };

  return [hooks[currentIndex], setState];
}

// 렌더링 함수 (나중에 구현)
function render() {
  hookIndex = 0; // 훅 인덱스 리셋
  // TODO: 실제 렌더링 로직
  console.log('🔄 리렌더링!', hooks);
}

// 테스트용 함수
export function testUseState() {
  console.log('useState 테스트 시작!');

  const [count, setCount] = useState(0);
  console.log('초기 count:', count);

  setCount(5);
  console.log('변경 후 count:', count);
}
