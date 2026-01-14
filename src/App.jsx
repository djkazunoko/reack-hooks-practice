import { useFormInput } from './hooks/useFormInput'
import './App.css'

function App() {
  const firstNameProps = useFormInput('yamada');
  const lastNameProps = useFormInput('taro');

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  )
}

export default App
