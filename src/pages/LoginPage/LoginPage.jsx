import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container className="mt-3"> 
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </Container>
  );
}
