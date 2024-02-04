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
    <div>
      {shouldRedirect ? (
        <div>
          <h1>Hello!</h1>
          <p>Please, log in.</p>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>You are already logged in.</p>
        </div>
      )}
    </div>
  );
}
