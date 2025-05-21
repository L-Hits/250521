# 웹화면구현 250521

## 프로젝트 개요
> 이 프로젝트는 **웹화면구현 250521**에서 한 기본적인 웹 페이지 구현과 DOM 조작, 이벤트 처리 등 웹 프론트엔드 기술을 연습하기 위한 프로젝트입니다.

## 구현된 기능
### HTML 구조
- 기본 텍스트 표시를 위한 p 태그
- 외부 링크를 위한 a 태그(길벗, 수코딩)
- 이벤트 처리를 위한 버튼 요소
- 사용자 입력을 위한 폼 요소(이름, 나이, 성별, 파일 업로드)

### JavaScript 기능
- DOM 요소 조작
  - 요소 표시/숨김 토글 기능(isDisplayToggle)
  - 특정 요소 삭제 기능(removeAllA)
- 이벤트 처리
  - focus/blur 이벤트 처리
  - 클릭 이벤트를 통한 스타일 변경
  - 이벤트 리스너를 통한 버튼 색상 변경
  - 텍스트 색상 변경 기능

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
│   └── style.css               # 스타일시트 (현재 비어있음)
├── js/
│   └── main.js                 # JavaScript 로직
├── index.html                  # 메인 HTML 페이지
└── README.md                   # 수업에서 학습한 내용 정리
```
