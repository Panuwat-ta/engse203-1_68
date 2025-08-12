import React, { useState } from 'react'

function StudentForm({ onStudentAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    major: '',
    year: 1,
    gpa: 0.0,
    hobbies: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const majors = [
    'วิศวกรรมซอฟต์แวร์',
    'วิศวกรรมคอมพิวเตอร์', 
    'เทคโนโลยีสารสนเทศ',
    'วิทยาการคอมพิวเตอร์'
  ]

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }))

    // Clear error เมื่อ user เริ่มแก้ไข
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'กรุณากรอกชื่อ-นามสกุล'
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = 'กรุณากรอกรหัสนักศึกษา'
    } else if (!/^\d{8}$/.test(formData.studentId)) {
      newErrors.studentId = 'รหัสนักศึกษาต้องเป็นตัวเลข 8 หลัก'
    }

    if (!formData.major) {
      newErrors.major = 'กรุณาเลือกสาขาวิชา'
    }

    if (formData.gpa < 0 || formData.gpa > 4) {
      newErrors.gpa = 'เกรดเฉลี่ยต้องอยู่ระหว่าง 0.00-4.00'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // จำลองการส่งข้อมูลไปเซิร์ฟเวอร์
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const studentData = {
        ...formData,
        id: Date.now(), // สร้าง ID แบบง่ายๆ
        hobbies: formData.hobbies ? formData.hobbies.split(',').map(h => h.trim()) : []
      }

      onStudentAdd && onStudentAdd(studentData)
      
      // Reset form
      setFormData({
        name: '',
        studentId: '',
        major: '',
        year: 1,
        gpa: 0.0,
        hobbies: ''
      })

      alert('✅ บันทึกข้อมูลเรียบร้อย!')
      
    } catch (error) {
      alert('❌ เกิดข้อผิดพลาด: ' + error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="student-form">
      <h2>📝 ลงทะเบียนข้อมูลนักศึกษา</h2>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">ชื่อ-นามสกุล *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            placeholder="เช่น นายสมชาย ใจดี"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="studentId">รหัสนักศึกษา *</label>
          <input
            id="studentId"
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            className={errors.studentId ? 'error' : ''}
            placeholder="12345678"
            maxLength={8}
          />
          {errors.studentId && <span className="error-message">{errors.studentId}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="major">สาขาวิชา *</label>
          <select
            id="major"
            name="major"
            value={formData.major}
            onChange={handleInputChange}
            className={errors.major ? 'error' : ''}
          >
            <option value="">-- เลือกสาขาวิชา --</option>
            {majors.map(major => (
              <option key={major} value={major}>{major}</option>
            ))}
          </select>
          {errors.major && <span className="error-message">{errors.major}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year">ชั้นปี</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            >
              <option value={1}>ปี 1</option>
              <option value={2}>ปี 2</option>
              <option value={3}>ปี 3</option>
              <option value={4}>ปี 4</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gpa">เกรดเฉลี่ย</label>
            <input
              id="gpa"
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleInputChange}
              min="0"
              max="4"
              step="0.01"
              className={errors.gpa ? 'error' : ''}
            />
            {errors.gpa && <span className="error-message">{errors.gpa}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="hobbies">งานอดิเรก</label>
          <input
            id="hobbies"
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleInputChange}
            placeholder="เช่น อ่านหนังสือ, เล่นเกม, ฟังเพลง (คั่นด้วยเครื่องหมายจุลภาค)"
          />
          <small>แยกแต่ละงานอดิเรกด้วยเครื่องหมายจุลภาค (,)</small>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? '⏳ กำลังบันทึก...' : '💾 บันทึกข้อมูล'}
          </button>
        </div>
      </form>

      {/* Live Preview */}
      <div className="form-preview">
        <h3>ตัวอย่างข้อมูล:</h3>
        <pre className="preview-data">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default StudentForm