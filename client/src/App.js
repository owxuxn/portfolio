import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

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
        <div className="header-left">
          <button 
            className="sidebar-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            type="button"
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1>owxuxn</h1>
        </div>
        <div className={`status ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '🟢 실시간 연결됨' : '🔴 연결 끊김'}
        </div>
      </header>

      <main className="main">
        {currentPage === 'home' && <Home portfolioData={portfolioData} />}
        {currentPage === 'projects' && <Projects portfolioData={portfolioData} />}
        {currentPage === 'skills' && <Skills portfolioData={portfolioData} />}
        {currentPage === 'experience' && <Experience portfolioData={portfolioData} />}
      </main>

      <footer className="footer">
        {portfolioData.lastUpdated && (
          <p>📅 마지막 업데이트: {new Date(portfolioData.lastUpdated).toLocaleString('ko-KR')}</p>
        )}
        <p>© 2025 owxuxn portfolio. All rights reserved.</p>
      </footer>
      
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;