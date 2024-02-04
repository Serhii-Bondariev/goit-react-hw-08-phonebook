import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth.selectors';

export default function HomePage() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return (
    <div className="container mt-4">
      {shouldRedirect ? (
        <Alert className="text-center, mt-4, mb-4 " variant="warning">
          <h1>Hello!</h1>
          <p>Please, log in.</p>
        </Alert>
      ) : (
        <Alert variant="success">
          <h1>Welcome!</h1>
          <p>You are already logged in.</p>
        </Alert>
      )}
    </div>
  );
}
