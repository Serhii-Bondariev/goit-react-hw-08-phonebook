import React, { createContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactSwitch from 'react-switch';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';
import { logOut } from 'redux/auth/auth.operations';

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
          <header>
            <nav>
              <NavLink to="/" end>
                Home
              </NavLink>

              {isLoggedIn ? (
                <>
                  <NavLink to="/contacts">Contacts</NavLink>

                  <div>
                    <p>
                      Welcome, <b>{user.name}</b>
                    </p>
                    <button type="button" onClick={() => dispatch(logOut())}>
                      Logout
                    </button>
                    <div>
                      <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        handleDiameter={35}
                        onColor="#ffc400"
                        offColor="#4e4e4e"
                        offHandleColor="#fff"
                        onHandleColor="#000"
                        height={30}
                        width={60}
                        borderRadius={50}
                        activeBoxShadow="0px 0px 1px 2px #fffc35"
                        uncheckedIcon={<div>day</div>}
                        checkedIcon={<div>night</div>}
                        uncheckedHandleIcon={<div>🌞</div>}
                        checkedHandleIcon={<div>🌙</div>}
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
