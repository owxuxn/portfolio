import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// Google Fonts 추가
if (!document.querySelector('link[href*="Poppins"]')) {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

// Pretendard 폰트 추가 (한글 최적화)
if (!document.querySelector('link[href*="Pretendard"]')) {
  const pretendardLink = document.createElement('link');
  pretendardLink.href = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
  pretendardLink.rel = 'stylesheet';
  document.head.appendChild(pretendardLink);
}

let socket;

function App() {
  const [portfolioData, setPortfolioData] = useState({
    projects: [],
    skills: [],
    experience: [],
    lastUpdated: null
  });
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Socket 초기화
    socket = io('http://localhost:5000', {
      transports: ['websocket', 'polling']
    });

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('서버에 연결됨');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('서버 연결 끊김');
    });

    socket.on('connect_error', (error) => {
      console.error('연결 에러:', error);
      setIsConnected(false);
    });

    socket.on('portfolioUpdate', (data) => {
      setPortfolioData(data);
      console.log('포트폴리오 데이터 업데이트됨:', data);
    });

    return () => {
      if (socket) {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('connect_error');
        socket.off('portfolioUpdate');
        socket.disconnect();
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>강지훈</h1>
        <div className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '🟢 실시간 연결됨' : '🔴 연결 끊김'}
        </div>
      </header>

      <main className="main">
        <section className="section">
          <h2>프로젝트</h2>
          {portfolioData.projects && portfolioData.projects.length > 0 ? (
            portfolioData.projects.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.name || '제목 없음'}</h3>
                <p>{project.description || '설명이 없습니다.'}</p>
                <p><strong>기술 스택:</strong> {project.tech || 'N/A'}</p>
              </div>
            ))
          ) : (
            <div className="card">
              <p>프로젝트 데이터를 불러오는 중...</p>
            </div>
          )}
        </section>

        <section className="section">
          <h2>기술 스택</h2>
          <div className="skills">
            {portfolioData.skills && portfolioData.skills.length > 0 ? (
              portfolioData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))
            ) : (
              <p>기술 스택을 불러오는 중...</p>
            )}
          </div>
        </section>

        <section className="section">
          <h2>경험</h2>
          {portfolioData.experience && portfolioData.experience.length > 0 ? (
            portfolioData.experience.map((exp, index) => (
              <div key={index} className="card">
                <h3>{exp.company || '회사명 없음'}</h3>
                <p><strong>{exp.position || '직책 없음'}</strong> • {exp.period || '기간 없음'}</p>
                <p>{exp.description || '설명이 없습니다.'}</p>
              </div>
            ))
          ) : (
            <div className="card">
              <p>경험 데이터를 불러오는 중...</p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        {portfolioData.lastUpdated && (
          <p>📅 마지막 업데이트: {new Date(portfolioData.lastUpdated).toLocaleString('ko-KR')}</p>
        )}
        <p>© 2025 owxuxn portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;