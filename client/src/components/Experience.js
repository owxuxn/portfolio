import React from 'react';

function Experience({ portfolioData }) {
  const clubs = portfolioData.experience?.filter(exp => exp.company === '동아리 활동') || [];
  const awards = portfolioData.experience?.filter(exp => exp.company === '수상 경력') || [];
  const education = portfolioData.experience?.filter(exp => exp.company === '교육 이수') || [];

  return (
    <section className="section">
      <h2>경험</h2>
      
      <div className="experience-category">
        <h3 className="category-title">👥 동아리 활동</h3>
        {clubs.length > 0 ? (
          clubs.map((club, index) => (
            <div key={index} className="card">
              <h4>{club.position}</h4>
              <p><strong>기간:</strong> {club.period}</p>
              <p>{club.description}</p>
            </div>
          ))
        ) : (
          <div className="card">
            <p>동아리 활동을 불러오는 중...</p>
          </div>
        )}
      </div>

      <div className="experience-category">
        <h3 className="category-title">🏆 대회 참가 이력</h3>
        {awards.length > 0 ? (
          awards.map((award, index) => (
            <div key={index} className="card">
              <h4>{award.position}</h4>
              <p><strong>기간:</strong> {award.period}</p>
              <p>{award.description}</p>
            </div>
          ))
        ) : (
          <div className="card">
            <p>대회 이력을 불러오는 중...</p>
          </div>
        )}
      </div>

      <div className="experience-category">
        <h3 className="category-title">📚 교육 이수</h3>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="card">
              <h4>{edu.position}</h4>
              <p><strong>기간:</strong> {edu.period}</p>
              <p>{edu.description}</p>
            </div>
          ))
        ) : (
          <div className="card">
            <p>교육 이수 데이터를 불러오는 중...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;