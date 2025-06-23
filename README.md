# Notion API 기반 블로그 만들기

이 프로젝트는 Next.js와 TanStack Query를 학습하고, 실전에서 사용할 수 있는 개인 기술 블로그를 만드는 것을 목표로 합니다.
Notion DB를 Headless CMS처럼 활용하며, SSR과 CSR을 적절히 혼합한 구조로 구현됩니다.

아키텍처는 FSD(Feature-Sliced Design) 패턴을 따르며, 클라이언트 전역 상태 관리는 Zustand를 사용합니다.

vercel 배포 링크
https://notion-blog-woad-tau.vercel.app/

---

## 📌 주요 기능

### 📚 포스팅 카테고리 및 DB 구성
- 각 카테고리는 별도의 Notion DB로 구성합니다.
- 카테고리 목록:
  - 기술 블로깅
  - 교육/학습 (강의, UI/UX 분석, 코테 회고 등)
  - 잡담 (회고, 독서 등)

#### 📄 공통 DB 필드
- `Name`, `Group`, `Tags`, `Created Date`, `State`, `Thumbnail`

### 📊 통계 페이지 컨탠츠(구현예정)
- 태그 분포 → 원형 그래프로 시각화
- 날짜별 글 작성 → GitHub 잔디 스타일 시각화
- 카테고리별 포스팅 수 → 막대 그래프 등으로 표현 예정

---

## 🧭 페이지별 구성

#### Header
- 로고 (홈 링크), About Me, GitHub 링크, 다크모드 토글 버튼

#### Side Navigation
- 소개 문구 박스
- 검색창 (URL 쿼리로 검색어 전달) + fuse.js로 검색결과 필터링
- 태그별 포스트 수 리스트

### `/` 메인 페이지
- **기술 블로깅**: `PostCard` 형태로 최신 6개 출력
- **교육/학습, 잡담**: `PostTableRow` 형태로 제목만 노출
- 각 섹션은 '더보기' 버튼 → 해당 카테고리로 이동 (`/posting/[category]`)

### `/posting/[category]` 포스팅 리스트
- 카테고리별 무한스크롤
- TanStack Query + Intersection Observer(감지div) 기반 CSR 렌더링

### `/post/[id]` 포스팅 상세 페이지
- SSR로 메타데이터 구성 (SEO 최적화)
- CSR로 `notion-render-x` 렌더링
- 댓글 컴포넌트도 CSR 렌더링

### `/stats` 통계 페이지
- 태그별 빈도수, 카테고리별 글 개수, 날짜별 작성 추이 등을 시각화
- (예정) GitHub-style heatmap 추가

---

## 🚦 렌더링 전략 요약

| 페이지 | SSR | CSR | 비고 |
|--------|-----|-----|------|
| `/` 메인 | ✅ | ❌ | 메인 포스팅, 태그 목록은 SSR |
| `/posting/[category]` | ❌ | ✅ | 무한스크롤 적용 |
| `/post/[id]` | ✅ | ✅ | SEO 위해 메타데이터 SSR, 본문 및 댓글은 CSR |
| `/stats` | 선택 | 선택 | 라이브러리에 따라 결정 |

---

## ⚙️ 기술 스택

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Notion API
- TanStack Query
- notion-render-x
- zustand
- fuse.js
- (예정) Chart.js or Recharts

---

## 🧱 폴더 구조 예시 (FSD)

```bash
/app
  ├── (page)
  │    ├──posting/[category]/page.tsx
  │    ├──post/[id]/page.tsx
  │    └──stats/page.tsx
  ├── api/
  │    └post/[id]/page.tsx
  ├── layout.tsx
  └── page.tsx
/src
  ├── entities/
  ├── features/
  ├── widgets/
  ├── shared/
```

---

# 1. 의존성 설치
yarn install

# 2. 개발 서버 실행
- yarn dev
- yarn storybook

# 3. 환경 변수 설정 (.env.local)
NOTION_API_KET=your_notion_token

NOTION_TECHDB_ID=XXX
NOTION_PROJECTDB_ID=XXX
NOTION_EDUCATIONDB_ID=xxx
...

last update : 2025.06.16