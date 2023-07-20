import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInputs from './components/FormInputs'

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!!",
      placeholder: 'e.g; _theJoe',
      label: 'Username:',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      errorMessage: "It should be a valid email",
      placeholder: 'e.g; jDoe@gmail.com',
      label: 'E-mail Address:',
      required: true
    },
    {
      id: 3,
      name: 'fullname',
      type: 'text',
      errorMessage: "",
      placeholder: 'e.g; John Doe Cash',
      label: 'Full Name:',
      pattern: '^[A-Za-z]{3,100}$',
      required: true
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      errorMessage: "Password should be 8-16 characters and should include at least 1 letter, 1 number, and 1 special character",
      placeholder: 'Enter your password',
      label: 'Password:',
      pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,16}$)',
      required: true
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      errorMessage: "Passwords don't match",
      placeholder: 'Type your password again',
      label: 'Confirm Password:',
      pattern: values.password,
      required: true
    },
  ]

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h2>Form Validation</h2>
        {inputs.map((input) => (
          <FormInputs key={input.id} {...input} value={values[input.name]} onChange = {onChange} />
        ))}
        <button>Submit Form</button>
      </form>
    </div>
  )
}

export default App
