# Notion Api를 통한 블블로그만들기

## 기능적 요구사항
### 1. 포스팅 카테고리는 아래와 같이 분류하며 각각의 NotionDB를 구성해 놔야한다.
  A.포스팅 DB 리스트
    - 기술블로깅
    - 교육/학습 블로깅 (강의, UI/UX분석, 코딩테스트 회고, Js기본함수 등)
    - 잡담 블로깅 (주간간 회고, 책)

  B. 모든 NotionDB는 아래의 컬럼을 가지고 있어야 한다.
    - Name | group | tags | Created Date | state | Thumbnai

### 2.각 페이지 기능 구성
  A. MainPage(/) 의 메인 Container
    - 3개의 DB의 가장 최신글을 보여준다.
    - 기술블로깅은 6개의 PostCard를 활용하여 나타냄
    - 교육/학습, 잡담 블로깅은 텍스트 테이블로 나타낸다.
    - 각 그리드는 더보기 또는 자세히 보기 같은 UI요소가 있어야하고 각 요소는 각 카테고리만 보는 PostList로 라우팅 되어야 함.

  B. MainPage(/)의 해더
    - 메인 페이지로 돌아가는 로고 
    - 포트폴리오로 링크된 AboutMe
    - Github 프로필로 링크된 Github 아이콘
    - 테마 변경을 위한 스위칭 버튼

  C. MainPage(/)의 사이드 네비게이터
    - 아이콘 박스 및 간단한 문구를 적을 수 있는 택스트 박스
    - 검색을 위한 검색 인풋
    - Tags를 집계한 태그 리스트 ex) React 10

  D. PostList(/post-list)
    - 동적 라우팅으로 각 카테고리의 포스트 리스트를 받아옴
    - TanStackQuery를 통한 무한스크롤링 적용.

  E. PostDetail(/post-detail)
    - 동적 라우팅으로 notion-render-x에게 PageId를 전달
    - 동적 라우팅으로 해당 Post의 댓글을 전달
    - 위 두 컴포넌트를 조합하는 컴포넌트를 랜더링

  F. 통계 페이지(/statistic)
    - 적절한 라이브러리를 채택해서 그래프 형태로 보여줄 예정.
    - 태그 카운트, 최근에 글을 언제 작성했는지, 카테고리별 분포도 등.

### 3.랜더링 전략
