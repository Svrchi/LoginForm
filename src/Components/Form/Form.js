import React, { useState } from 'react';
import './Form.css';
import undraw from '../../imgs/undraw.svg'

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

  const sendRequest = (e) => {
    e.preventDefault();

    fetch('https://reqres.in//api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: { email },
        password: { password }
      })
    }).then(res => {
      return res.json
    })
      .then(data => console.log(data))
      .catch(error => console.log("ERROR"))
  }

  const asyncPostCall = async () => {
    try {
      const response = await fetch('https://reqres.in//api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // your expected POST request payload goes here
          email: { email },
          password: { password }
        })
      });
      const data = await response.json();
      // enter you logic when the fetch is successful
      console.log(data);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error)
    }
  }


  const validateEmail = (e) => {
    console.log('in email validate');
    setEmail(e.target.value);
    console.log('current email', email);
  };



  console.log('Email:', email)
  console.log("Password:", password)

  return (
    <div className='wrapper'>
      <img className='svg' src={undraw} />
      <div className='formContainer'>
        <div className='header_content'>
        <p>Login</p>
        </div>
        <form className="form" onSubmit={(e) => sendRequest(e)}>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordIsNotValid.isValid && <p>{passwordIsNotValid.message}</p>}
          <button className='submit' type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
