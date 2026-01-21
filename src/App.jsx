import { useFormInput } from './hooks/useFormInput'
import './App.css'

function App() {
  const [firstName, handleFirstNameChange] = useFormInput('yamada');
  const [lastName, handleLastNameChange] = useFormInput('taro');

  return (
    <>
      <label>
        First name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p><b>Good morning, {firstName} {lastName}.</b></p>
    </>
  )
}

export default App
