import React, { createContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';
import { logOut } from 'redux/auth/auth.operations';
import css from './SharedLayout.module.css';

export const ThemeContext = createContext(null);

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme ? initialTheme : 'light';
  });

  const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className={css.container}>
          <header className={css.header}>
            <nav className={css.nav}>
              <NavLink className={css.link} to="/" end>
                Home
              </NavLink>

              {isLoggedIn ? (
                <>
                  <NavLink className={css.link} to="/contacts">
                    Contacts
                  </NavLink>

                  <div className={css.userBlock}>
                    <p className={css.userAtributs}>
                      Hi! <b className={css.userName}>{user.name} </b>
                      <b className={css.userEmail}>{user.email}</b>
                      {/* <b className={css.userAvatar}>{user.avatar}</b> */}
                    </p>

                    <NavLink
                      className={css.btn}
                      to="/"
                      onClick={() => dispatch(logOut())}
                    >
                      Logout
                    </NavLink>
                  </div>
                </>
              ) : (
                <div className={css.homePageEnter}>
                  <NavLink className={css.link} to="/register">
                    Register
                  </NavLink>
                  <NavLink className={css.link} to="/login">
                    Log In
                  </NavLink>
                </div>
              )}
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default SharedLayout;
