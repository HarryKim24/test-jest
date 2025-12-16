import { useState } from "react"

const InputForm = () => {

  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (value.trim() === '') setMessage('값을 입력하세요');
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>확인</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default InputForm