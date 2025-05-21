# 웹화면구현 250521

## 프로젝트 개요
> 이 프로젝트는 **웹화면구현 250521** 수업에서 학습한 기본적인 웹 페이지 구현과 DOM 조작, 이벤트 처리 등 웹 프론트엔드 기술을 연습하기 위한 프로젝트입니다.

## 학습 내용 요약

### 1. DOM 노드 다루기
- **DOM에서 노드 선택하기**
  - 요소 노드 (document.querySelector, document.querySelectorAll)
  - 텍스트 노드 (document.createTextNode)
  - 속성 노드 (document.createAttribute)

- **노드 조작하기**
  - 컨텐츠 추가, 변경하기 (innerHTML, textContent)
  - style 읽어오기, style 변경하기 (element.style)
  - 클래스 속성 추가, 변경, 토글 설정 (classList)

- **노드 추가/삭제/변경하기**
  - createElement로 요소 생성
  - appendChild로 자식 요소 추가
  - removeChild로 자식 요소 삭제
  - parentNode를 통한 부모 노드 접근

### 2. 폼 조작하기 
- name 속성을 설정하여 폼에 쉽게 접근
- name 속성으로 폼 내부 요소에 편리하게 접근
- 폼 요소의 입력값 조작 및 검증

### 3. 이벤트 처리
- **이벤트 등록 방법**
  - 인라인 방식 (태그 속성에 onclick="" 등을 등록)
  - 프로퍼티 리스너 방식 (객체.onevent = function())
  - 이벤트 등록 메소드 (addEventListener 사용) **권장 방식**

- **이벤트 객체와 this**
  - this 객체 사용 (function() 표현식 사용 시)
  - 이벤트 객체의 e.target 활용
  - 이벤트 버블링과 캡처링 이해

## 구현된 기능

### HTML 구조
- 기본 텍스트 표시를 위한 p 태그 
- 외부 링크를 위한 a 태그 (길벗, 수코딩 사이트 연결)
- 이벤트 처리를 위한 버튼 요소
- 사용자 입력을 위한 폼 요소 (이름, 나이, 성별, 파일 업로드)

### JavaScript 기능
- **DOM 요소 조작**
  - 요소 표시/숨김 토글 기능 (isDisplayToggle 함수)
  - 특정 요소 삭제 기능 (removeAllA 함수)
  
- **이벤트 처리 구현**
  - focus/blur 이벤트 처리
  - 클릭 이벤트를 통한 스타일 변경
  - 이벤트 리스너를 통한 버튼 색상 변경
  - 텍스트 클릭 시 색상 변경 기능

### GitHub 워크플로우 설정
- 이슈 템플릿 (버그 리포트, 작업 계획)
- PR 템플릿
- 레이블 자동화 워크플로우

## 프로젝트 구조
```
250521/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── 1-bug-report.yml    # 버그 리포트 템플릿
│   │   └── 2-tasks.yml         # 작업 계획 템플릿
│   ├── workflows/
│   │   ├── label-sync.yml      # 레이블 동기화 워크플로우
│   │   └── labels.json         # 레이블 정의
│   └── pull_request_template.md # PR 템플릿
├── css/
│   └── style.css               # 스타일시트
├── js/
│   └── main.js                 # JavaScript 로직
├── index.html                  # 메인 HTML 페이지
└── README.md                   # 현재 문서 (학습 내용 정리)
```
