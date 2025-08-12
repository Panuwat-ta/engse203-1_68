// src/App.jsx - อัพเดทเพื่อใช้ Welcome component
import { useState } from 'react'
import Welcome from './components/Welcome'
import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import StudentForm from './components/StudentForm'
import './App.css'

function App() {
  // ✅ เพิ่ม useState และ handleStudentAdd
  const [students, setStudents] = useState([])

  const handleStudentAdd = (newStudent) => {
    setStudents(prev => [...prev, newStudent])
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>🎉 React Components Demo</h1>

          <h2 className='h2'>Practice 1.2: สร้าง Component แรก</h2>
          {/* ใช้ Component พร้อม Props */}
          <Welcome
            name="สมชาย ใจดี"
            age={20}
            university="มหาวิทยาลัยเทคโนโลยี"
          />

          <Welcome
            name="สมหญิง รักเรียน"
            age={19}
            university="มหาวิทยาลัยเทคโนโลยี"
          />

          <h2 className='h2'>Exercise 1: สร้าง StudentCard Component</h2>
          <StudentCard
            student={{
              id: '67543210044-3',
              name: 'panuwat takham',
              major: 'วิศวกรรมซอฟต์แวร์',
              year: 2,
              gpa: 3.6,
              photo: 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/298443610_1147077842540279_19354308872580370_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFH1X1FYTewRWhj5WfN-zG-I59CDKvD8NQjn0IMq8Pw1HWf3QxXfJIUC2fz76LdeZoFI1Hp5seD-semQCtdoeAa&_nc_ohc=hI35k3dgsmIQ7kNvwFa3aKF&_nc_oc=AdnWk_ydc8ZrsmB7hKjdXAdfSpBnq8UE9GJ2PDLTpsORtcwF06KUZtWegGemB6sHCKE&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=Sp-wksXK5HsgoWLbOq9jRw&oh=00_AfWlsq7QNaFtNj2DW3zdsu0LPpGt3kT7pYz4w5Hy7euFOw&oe=68988132',
              hobbies: ['เล่นเกม', 'ฟังเพลง']
            }}
          />

          <h2 className='h2'>Practice 2.1: Interactive Components</h2>
          <Counter />

          <h2 className='h2'>Practice 2.2: Form Handling</h2>
          <StudentForm onStudentAdd={handleStudentAdd} />

          <h2 className='h2'>รายชื่อนักศึกษาที่ลงทะเบียน</h2>

          {students.length === 0 ? (
            <p></p>
          ) : (
            <div className="student-list">
              {students.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}

        </header>
      </div>
    </>
  )
}

export default App