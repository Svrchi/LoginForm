import React, { useState } from 'react';
import './Form.css';

// we need to check that email is a valid email
// we cannot submit form if password is empty or less than 1 character

const Form = () => {
  // EMAIL STATE
  const [email, setEmail] = useState('');
  const [emailIsNotValid, setEmailIsNotValid] = useState({
    isValid: false,
    message: ''
  });
  // PASSWORD STATE
  const [password, setPassword] = useState('');
  const [passwordIsNotValid, setPasswordIsNotValid] = useState({
    isValid: false,
    message: ''
  });

  // FUNCTIONALITY
//   async const handleSubmit = () => {
//     console.log('on submit');
//     fetch('https://reqres.in/api/users'),{

//     }
//   };

  const validateEmail = (e) => {
    console.log('in email validate');
    setEmail(e.target.vaule);
    console.log('current email', email);
  };



  console.log('Email:',email)
  console.log("Password:",password)
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* EMAIL */}
      <label>email</label>
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailIsNotValid.isValid && <p>{emailIsNotValid.message}</p>}
      {/* PASSWORD */}
      <label>Password</label>
      <input 
      type="password" 
      required 
      placeholder="Enter your password" 
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      {passwordIsNotValid.isValid && <p>{passwordIsNotValid.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
