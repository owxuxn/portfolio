# 실시간 포트폴리오

React와 Node.js를 사용한 실시간 업데이트 포트폴리오 웹사이트

## 기능
- 실시간 데이터 업데이트 (Socket.IO)
- 파일 변경 감지 (Chokidar - 데몬셋 역할)
- 반응형 웹 디자인

## 설치 및 실행

### 1. 의존성 설치
```bash
npm run install-all
```

### 2. 개발 모드 실행
```bash
npm run dev
```

### 3. 프로덕션 모드 실행
```bash
npm start
```

## 실시간 업데이트 테스트

1. 브라우저에서 http://localhost:3000 접속
2. `shared/data.json` 파일을 수정
3. 저장하면 자동으로 웹페이지가 업데이트됨

## 구조
```
portfolio/
├── client/          # React 앱
├── server/          # Node.js 서버
├── shared/          # 공유 데이터
└── package.json     # 루트 설정
```

## 포트
- 클라이언트: http://localhost:3000
- 서버: http://localhost:5000