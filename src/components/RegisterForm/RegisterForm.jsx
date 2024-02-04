import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import 'bootstrap/dist/css/bootstrap.min.css'; // Імпортуємо стилі Bootstrap

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      name: evt.currentTarget.elements.name.value.trim(),
      email: evt.currentTarget.elements.email.value.trim(),
      password: evt.currentTarget.elements.password.value.trim(),
    };

    dispatch(register(formData));
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="mt-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Username
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="UserName"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="user@domain.com"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          minLength={7}
          placeholder="At least 7 characters"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

