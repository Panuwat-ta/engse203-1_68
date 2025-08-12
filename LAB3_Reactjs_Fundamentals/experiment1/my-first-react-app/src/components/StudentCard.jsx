// src/components/StudentCard.jsx
import React from 'react'

function StudentCard({ student }) {
  const { id, name, major, year, gpa, photo, hobbies } = student
  
  const getGradeColor = (gpa) => {
    if (gpa >= 3.5) return '#10b981' // เขียว
    if (gpa >= 3.0) return '#f59e0b' // เหลือง
    if (gpa >= 2.5) return '#ef4444' // แดง
    return '#6b7280' // เทา
  }

  return (
    <div className="student-card">
      <div className="photo-section">
        <img 
          src={photo || 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/298443610_1147077842540279_19354308872580370_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFH1X1FYTewRWhj5WfN-zG-I59CDKvD8NQjn0IMq8Pw1HWf3QxXfJIUC2fz76LdeZoFI1Hp5seD-semQCtdoeAa&_nc_ohc=hI35k3dgsmIQ7kNvwFa3aKF&_nc_oc=AdnWk_ydc8ZrsmB7hKjdXAdfSpBnq8UE9GJ2PDLTpsORtcwF06KUZtWegGemB6sHCKE&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=Sp-wksXK5HsgoWLbOq9jRw&oh=00_AfWlsq7QNaFtNj2DW3zdsu0LPpGt3kT7pYz4w5Hy7euFOw&oe=68988132'} 
          alt={`${name} profile`}
          className="student-photo"
        />
      </div>
      
      <div className="info-section">
        <h3>{name}</h3>
        <p className="student-id">รหัส: {id}</p>
        <p className="major">{major}</p>
        <p className="year">ชั้นปีที่ {year}</p>
        
        <div className="gpa-section">
          <span>เกรดเฉลี่ย: </span>
          <span 
            className="gpa-value"
            style={{ color: getGradeColor(gpa) }}
          >
            {gpa.toFixed(2)}
          </span>
        </div>
        
        {hobbies && hobbies.length > 0 && (
          <div className="hobbies">
            <h4>งานอดิเรก:</h4>
            <div className="hobby-tags">
              {hobbies.map((hobby, index) => (
                <span key={index} className="hobby-tag">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCard