// ===== lib/react.js =====
import { render as domRender } from "./dom.js";

// 훅 관리를 위한 전역 변수들
let currentComponent = null;
let currentContainer = null;
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
    rerender();
  };

  return [hooks[currentIndex], setState];
}

// 컴포넌트 렌더링
export function render(component, container) {
  currentComponent = component;
  currentContainer = container;

  rerender();
}

// 리렌더링 함수
function rerender() {
  if (!currentComponent || !currentContainer) return;

  hookIndex = 0; // 훅 인덱스 리셋

  // 컴포넌트 실행해서 가상 DOM 생성
  const vnode = currentComponent();

  // 실제 DOM으로 렌더링
  domRender(vnode, currentContainer);

  console.log("🔄 리렌더링 완료!", { hooks, hookIndex });
}
