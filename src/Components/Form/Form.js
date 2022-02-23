import React, { useState } from 'react';
import './Form.css';
import undraw from '../../imgs/undraw.svg';

// we need to check that email is a valid email
// we cannot submit form if password is empty or less than 1 character

const Form = () => {
  // EMAIL STATE
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState({
    isValid: true
  });
  // PASSWORD STATE
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState({
    isValid: true
  });



  // FUNCTIONALITY
  const validateEmail = (e) => {
    if (e.target.value === 'test@test.com') {
      console.log(`EMAIL IS VALIDATED`);
      setEmail(e.target.value);
      setEmailValid({
        isValid: true
      });
    } else {
      setEmailValid({
        isValid: false
      });
    }
  };

  const validatePassword = (e) => {
    if (e.target.value === 'test') {
      console.log(`PASSWORD IS VALIDATED`);
      setPassword(e.target.value);
      setPasswordValid({
        isValid: true
      });
    } else {
      setPasswordValid({
        isValid: false
      });
    }
  };


  const formReset = () => {
    // when submitted the component rerenders resetting the default vaule
    // form reset not neccessary ?
    setEmail('');
    setEmailValid({ isValid: true });
    setPassword('');
    setPasswordValid({ isValid: true });
    console.log(
      `FORM RESET: ${email} ${password} ${emailValid} ${passwordValid}`
    );
  };

  const asyncPostCall = async (e) => {
    // e.preventDefault();
    console.log(`SUBMITTED EMAIL: ${email} PASSWORD: ${password}`);
    // try {
    //   const response = await fetch('https://reqres.in//api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       // your expected POST request payload goes here
    //       email: { email },
    //       password: { password }
    //     })
    //   });
    //   const data = await response.json();
    //   // enter you logic when the fetch is successful
    //   console.log(data);
    // } catch (error) {
    //   // enter your logic for when there is an error (ex. error toast)
    //   console.log(error)
    // }
    // console.log('onsubmit:', email)
    // formReset();
  };

  // INPUT ERROR MESSAGES
  const renderEmailError = () => {
    return emailValid.isValid ? <br /> : <p>incorrect email input </p>;
  };

  const renderPasswordError = () => {
    return passwordValid.isValid ? <br /> : <p>incorrect password input </p>;
  };

  console.log(`email: ${email}`);

  return (
    <div className="wrapper">
      <img className="svg" src={undraw} />
      <div className="formContainer">
        <div className="header_content">
          <p>Login</p>
        </div>
        <form className="form" onSubmit={(e) => asyncPostCall(e)}>
          {/*//////////////////////// EMAIL ///////////////////*/}
          <label>email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            defaultValue=""
            // value={email}
            onChange={(e) => validateEmail(e)}
          />
          {renderEmailError()}

          {/*//////////////////////// PASSWORD ///////////////////*/}
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            defaultValue=""
            onChange={(e) => validatePassword(e)}
          />
          {renderPasswordError()}

          {/*//////////////////////// SUBMIT ///////////////////*/}
          <button className="submit" type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
