import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" placeholder="UserName" required />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
