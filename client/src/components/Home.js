import React from 'react';

function Home({ portfolioData }) {
  return (
    <section className="section home-section">
      <div className="hero">
        <h2>안녕하세요!</h2>
        <p className="hero-subtitle">저는 천천히 성장하는 개발자 <strong>강지훈</strong>입니다.</p>
        <p className="hero-description">
          저만의 웹 사이트를 통해<br/>
          제 프로젝트와 경험을 소개합니다.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{portfolioData.projects?.length || 0}</span>
            <span className="stat-label">프로젝트</span>
          </div>
          <div className="stat">
            <span className="stat-number">{portfolioData.skills?.length || 0}</span>
            <span className="stat-label">기술 스택</span>
          </div>
          <div className="stat">
            <span className="stat-number">{portfolioData.experience?.length || 0}</span>
            <span className="stat-label">경험</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;