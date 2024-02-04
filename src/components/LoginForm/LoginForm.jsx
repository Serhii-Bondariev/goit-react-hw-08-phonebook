import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      email: evt.currentTarget.elements.email.value,
      password: evt.currentTarget.elements.password.value,
    };

    dispatch(logIn(formData));
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="user@domain.com"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          placeholder="At least 7 characters"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
