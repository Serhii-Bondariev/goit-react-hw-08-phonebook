import React, { createContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactSwitch from 'react-switch';
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
        <div>
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
                    <p className={css.userName}>
                      Hi! <b className={css.userAtributs}>{user.name} </b>
                      <b className={css.userEmail}>{user.email}</b>
                      <b className={css.userAvatar}>{user.avatar}</b>
                    </p>
                    <button
                      className={css.btn}
                      type="button"
                      onClick={() => dispatch(logOut())}
                    >
                      Logout
                    </button>
                    <div className={css.themeSwitcher}>
                      <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        handleDiameter={35}
                        onColor="#ffc400"
                        offColor="#4e4e4e"
                        offHandleColor="#ffffff"
                        onHandleColor="#000"
                        height={30}
                        width={60}
                        borderRadius={50}
                        activeBoxShadow="0px 0px 1px 2px #fffc35"
                        uncheckedIcon={<div>day</div>}
                        checkedIcon={<div>night</div>}
                        uncheckedHandleIcon={<div></div>}
                        checkedHandleIcon={<div></div>}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <NavLink to="/register">Register</NavLink>
                  <NavLink to="/login">Log In</NavLink>
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
