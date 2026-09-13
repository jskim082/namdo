# 남도홈케어 홈페이지

전남·광주 주방후드, 가스레인지, 방충망 교체 서비스 소개용 정적 React 홈페이지입니다.

## 주요 파일

- `client/index.html`: Vite가 사용하는 실제 HTML 진입점
- `client/src/pages/Home.tsx`: 홈페이지 본문
- `client/src/index.css`: 전체 스타일 및 반응형 디자인
- `client/src/App.tsx`: React 라우팅

이 프로젝트는 Vite 설정에서 `client`를 루트로 사용하므로, `index.html`은 프로젝트 최상위가 아니라 `client/index.html`에 위치하는 것이 정상입니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 빌드

```bash
pnpm build
```

## GitHub Pages 참고

GitHub Pages에 배포할 경우, GitHub Actions에서 다음 순서로 빌드합니다.

```bash
pnpm install
pnpm build
```

빌드 결과는 `dist/public`에 생성됩니다.
