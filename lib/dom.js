// ===== lib/dom.js =====
// 가상 DOM 노드 생성
export function createElement(tag, props = {}, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat(), // 중첩 배열 평평하게
  };
}

// 가상 DOM을 실제 DOM으로 변환
export function createDOMElement(vnode) {
  // 문자열이면 텍스트 노드
  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(vnode);
  }

  // 가상 DOM 객체라면
  if (vnode && typeof vnode === "object" && vnode.tag) {
    const element = document.createElement(vnode.tag);

    // props 적용
    if (vnode.props) {
      Object.keys(vnode.props).forEach((key) => {
        if (key.startsWith("on")) {
          // 이벤트 핸들러
          const eventName = key.slice(2).toLowerCase();
          element.addEventListener(eventName, vnode.props[key]);
        } else if (key === "className") {
          element.className = vnode.props[key];
        } else {
          element.setAttribute(key, vnode.props[key]);
        }
      });
    }

    // 자식 요소들 추가
    if (vnode.children) {
      vnode.children.forEach((child) => {
        const childElement = createDOMElement(child);
        if (childElement) {
          element.appendChild(childElement);
        }
      });
    }

    return element;
  }

  return null;
}

// 특정 DOM 요소에 렌더링
export function render(vnode, container) {
  // 기존 내용 제거
  container.innerHTML = "";

  // 새로운 DOM 요소 생성 및 추가
  const element = createDOMElement(vnode);
  if (element) {
    container.appendChild(element);
  }
}

// JSX 대신 사용할 헬퍼 함수 (h = hyperscript)
export const h = createElement;
