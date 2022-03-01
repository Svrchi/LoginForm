import React from 'react';
// import {global} from "@testing-library/react"
import { verifyLogin } from './LoginForm';

// {"email":"eve.holt@reqres.in","password":"cityslicka","id":"883","createdAt":"2022-02-25T03:38:21.584Z"}

const MOCK_SUCCESSFUL_RESPONSE =
  'email":"eve.holt@reqres.in has successfully logged in';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_SUCCESSFUL_RESPONSE)
  })
);

describe('Verify Login Function', () => {
  beforeEach(async () => {
    fetch.mockClear();
  });

  it('should return xxx for a successful login attempt', async () => {
    // valid login
    const response = await verifyLogin(
      JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
    expect(response).toBe(MOCK_SUCCESSFUL_RESPONSE);
  });

  it('should return xxx for a failed login attempt', async () => {
    fetch.mockReject(() => Promise.reject('Login attempt failed'));
    // pass in invalid login
    const response = await verifyLogin(
      JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslickaalskdjalksd'
      })
    );
    expect(response).toBe('Login attempt failed');
  });
});
