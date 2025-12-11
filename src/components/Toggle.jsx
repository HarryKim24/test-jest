import { useState } from "react"

const Toggle = () => {

  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>{isOn ? '켜짐' : '꺼짐'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  )
}

export default Toggle
