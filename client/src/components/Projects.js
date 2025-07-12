import React from 'react';

function Projects({ portfolioData }) {
  return (
    <section className="section">
      <h2>💼 프로젝트</h2>
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
  );
}

export default Projects;