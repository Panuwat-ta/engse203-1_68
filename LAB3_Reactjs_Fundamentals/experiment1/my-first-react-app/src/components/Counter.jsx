import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [history, setHistory] = useState([0])

  const increment = () => {
    const newCount = count + step
    setCount(newCount)
    setHistory(prev => [...prev, newCount])
  }

  const decrement = () => {
    const newCount = count - step
    setCount(newCount)
    setHistory(prev => [...prev, newCount])
  }

  const reset = () => {
    setCount(0)
    setHistory([0])
  }

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1
    setStep(value)
  }

  // Event handlers for keyboard
  const handleKeyPress = (e) => {
    switch(e.key) {
      case 'ArrowUp':
        increment()
        break
      case 'ArrowDown':
        decrement()
        break
      case 'Enter':
        reset()
        break
      default:
        break
    }
  }

  return (
    <div 
      className="counter-widget"
      onKeyDown={handleKeyPress}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <h2>🔢 เครื่องนับอัจฉริยะ</h2>
      
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      <div className="step-control">
        <label htmlFor="step-input">ขั้น: </label>
        <input
          id="step-input"
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          max="100"
          className="step-input"
        />
      </div>

      <div className="button-group">
        <button 
          onClick={decrement}
          className="btn btn-decrement"
          disabled={count <= 0 && step > 0}
        >
          ➖ ลด {step}
        </button>
        
        <button 
          onClick={reset}
          className="btn btn-reset"
        >
          🔄 รีเซ็ต
        </button>
        
        <button 
          onClick={increment}
          className="btn btn-increment"
        >
          ➕ เพิ่ม {step}
        </button>
      </div>

      <div className="keyboard-help">
        <small>💡 ใช้ ↑↓ เพื่อเปลี่ยนค่า, Enter เพื่อรีเซ็ต</small>
      </div>

      <div className="history">
        <h4>ประวัติการเปลี่ยนแปลง:</h4>
        <div className="history-values">
          {history.slice(-10).map((value, index) => (
            <span key={index} className="history-item">
              {value}
            </span>
          ))}
          {history.length > 10 && <span>...</span>}
        </div>
      </div>
    </div>
  )
}

export default Counter