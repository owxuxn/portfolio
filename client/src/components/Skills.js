import React from 'react';

function Skills({ portfolioData }) {
  return (
    <section className="section">
      <h2>🛠️ 기술 스택</h2>
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
  );
}

export default Skills;