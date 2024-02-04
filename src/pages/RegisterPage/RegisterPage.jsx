import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container className="mt-3"> 
      <div>
        <h1>Registration</h1>
        <RegisterForm />
      </div>
    </Container>
  );
}
