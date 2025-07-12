# 🚀 실시간 포트폴리오

> React와 Node.js를 사용한 실시간 업데이트 포트폴리오 웹사이트

[![GitHub](https://img.shields.io/badge/GitHub-owxuxn-blue?style=flat-square&logo=github)](https://github.com/owxuxn)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7.2-010101?style=flat-square&logo=socket.io)](https://socket.io/)

## ✨ 주요 기능

- 🔄 **실시간 데이터 업데이트** - Socket.IO를 통한 즉시 반영
- 📁 **파일 변경 감지** - Chokidar 데몬셋으로 자동 감지
- 📱 **반응형 디자인** - 모든 디바이스에서 완벽한 UI/UX
- 🎨 **모던 글래스모피즘** - 세련된 반투명 디자인
- ⚡ **빠른 성능** - 최적화된 React 컴포넌트

## 🛠️ 기술 스택

### Frontend
- **React** - 사용자 인터페이스
- **Socket.IO Client** - 실시간 통신
- **CSS3** - 글래스모피즘 디자인
- **Pretendard & Poppins** - 모던 타이포그래피

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **Socket.IO** - 실시간 양방향 통신
- **Chokidar** - 파일 시스템 감시

## 🚀 빠른 시작

### 1️⃣ 저장소 클론
```bash
git clone https://github.com/owxuxn/portfolio.git
cd portfolio
```

### 2️⃣ 의존성 설치
```bash
npm run install-all
```

### 3️⃣ 개발 서버 실행
```bash
npm run dev
```

### 4️⃣ 브라우저에서 확인
- 🌐 **클라이언트**: http://localhost:3000
- 🔧 **서버**: http://localhost:5000

## 🔥 실시간 업데이트 테스트

1. 브라우저에서 포트폴리오 열기
2. `shared/data.json` 파일 수정
3. 저장 → **즉시 웹페이지 업데이트!** ⚡

## 📁 프로젝트 구조

```
portfolio/
├── 📂 client/           # React 프론트엔드
│   ├── 📂 src/
│   │   ├── App.js       # 메인 컴포넌트
│   │   ├── App.css      # 글래스모피즘 스타일
│   │   └── index.js     # 앱 진입점
│   └── 📂 public/
├── 📂 server/           # Node.js 백엔드
│   ├── server.js        # Express + Socket.IO 서버
│   └── package.json
├── 📂 shared/           # 공유 데이터
│   └── data.json        # 포트폴리오 데이터
├── 📄 README.md
├── 📄 vercel.json       # Vercel 배포 설정
└── 📄 package.json      # 루트 설정
```

## 🎯 사용법

### 포트폴리오 데이터 수정
`shared/data.json` 파일을 편집하여 실시간으로 포트폴리오 내용을 업데이트할 수 있습니다:

```json
{
  "projects": [...],
  "skills": [...],
  "experience": [...]
}
```

### 스타일 커스터마이징
`client/src/App.css`에서 디자인을 자유롭게 수정할 수 있습니다.

## 🌐 배포

이 프로젝트는 **Vercel**에 최적화되어 있습니다:

1. GitHub에 푸시
2. Vercel에서 저장소 연결
3. 자동 배포 완료! 🎉

## 👨‍💻 개발자

**강지훈 (owxuxn)**
- 📧 Email: kang042591@gmail.com
- 🐙 GitHub: [@owxuxn](https://github.com/owxuxn)

## 📄 라이선스

MIT License - 자유롭게 사용하세요! 🎉

---

⭐ **이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**