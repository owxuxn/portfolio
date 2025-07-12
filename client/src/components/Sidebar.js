import React, { useState, useEffect } from 'react';

function Sidebar({ isSidebarOpen, setIsSidebarOpen, currentPage, handlePageChange }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSidebarOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsClosing(false);
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* 사이드바 오버레이 */}
      {(isSidebarOpen || isClosing) && (
        <div 
          className={`sidebar-overlay ${isClosing ? 'closing' : ''}`}
          onClick={handleClose}
        ></div>
      )}
      
      {/* 사이드바 메뉴 */}
      <div className={`sidebar ${isSidebarOpen && !isClosing ? 'sidebar-open' : ''} ${isClosing ? 'closing' : ''}`}>
        <div className="sidebar-header">
          <h3>메뉴</h3>
          <button 
            className="sidebar-close"
            onClick={handleClose}
            type="button"
            aria-label="메뉴 닫기"
          >
            ×
          </button>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handlePageChange('home')}
            type="button"
          >
            홈
          </button>
          <button 
            className={`nav-btn ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => handlePageChange('projects')}
            type="button"
          >
            프로젝트
          </button>
          <button 
            className={`nav-btn ${currentPage === 'skills' ? 'active' : ''}`}
            onClick={() => handlePageChange('skills')}
            type="button"
          >
            기술 스택
          </button>
          <button 
            className={`nav-btn ${currentPage === 'experience' ? 'active' : ''}`}
            onClick={() => handlePageChange('experience')}
            type="button"
          >
            경험
          </button>
          <a href="mailto:kang042591@gmail.com">연락하기</a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;