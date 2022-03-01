import React, { useState } from 'react';
import './LoginForm.css';
import undraw from '../../imgs/undraw.svg';
import validator from 'validator';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState({
    isValid: true
  });
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState({
    isValid: true
  });

  const validateEmail = (e) => {
    if (validator.isEmail(e.target.value)) {
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
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
      })
    ) {
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

  const verifyLogin = async (e) => {
    e.preventDefault();
    // console.log(`SUBMITTED EMAIL: ${email} PASSWORD: ${password}`);
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = response.json();
      if (data.status === 200) {
        // reroute to landing page or throw alert with 'login successful'
        // alert('Login Successful');
        return `${data.email} has successfully logged in`;
      }
      // enter you logic when the fetch is successful
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      // console.log(error);
      // throw new Error('Login Failed');
      return 'Login attempt failed';
    }
  };

  // INPUT ERROR MESSAGES
  const renderEmailError = () => {
    return emailValid.isValid ? (
      <br />
    ) : (
      <p className="login-error">Email must be formatted correctly. </p>
    );
  };

  const renderPasswordError = () => {
    return passwordValid.isValid ? (
      <br />
    ) : (
      <p className="login-error"> 8 or more characters </p>
    );
  };

  return (
    <div className="login-wrapper">
      <img className="login-svg" src={undraw} />
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => verifyLogin(e)}>
          <div className="login-form-header-content">
            <p>Login</p>
          </div>
          <div className="login-email-input-container">
            <label className="login-email-label">Email</label>
            <input
              className={
                emailValid.isValid
                  ? 'login-email-input-field-valid'
                  : 'login-email-input-field-not-valid'
              }
              type="email"
              placeholder="Enter your email"
              required
              defaultValue=""
              onChange={(e) => validateEmail(e)}
            />
            {renderEmailError()}
          </div>

          <div className="login-password-input-container">
            <label className="login-password-label">Password</label>
            <input
              className={
                passwordValid.isValid
                  ? 'login-password-input-field-valid'
                  : 'login-password-input-field-not-valid'
              }
              type="password"
              required
              placeholder="Enter your password"
              defaultValue=""
              onChange={(e) => validatePassword(e)}
            />
            {renderPasswordError()}
          </div>
          <span className="line-break"></span>

          <button className="submit" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
