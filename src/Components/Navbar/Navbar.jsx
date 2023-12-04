import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthContext,
  initialState,
} from "../../Context/AuthContext/AuthContextProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);
  console.log(authState);
  const { isAuth, cart, count } = authState;
  console.log(isAuth);
  const handleLogout = () => {
    setAuthState({ ...initialState, isAuth: false });
    // setAuthState({...initialState,cart:[...cart,item]})
  };
  return (
    <nav className={styles.navbar}>
      <div>
        <img src="images\logo.png" />
      </div>
      <div className={styles.contents}>
        <Link to="/products">Catalog</Link>
        <a href="#">Sale</a>
        <a href="#">Delivery and Payment</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles.links}>
        <div className={styles.search}>
          <input placeholder="Search Products" />
          <img
            src="images\navbar_images\search-icon.svg"
            style={{ width: "1.4rem" }}
          />
        </div>
        <span>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <span
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </span>
          )}
        </span>
        <div className={styles.cart}>
          <img
            src="images\navbar_images\bucket-icon.svg"
            style={{ width: "1.5rem" }}
            onClick={() => {
              navigate("/cart");
            }}
          />
          <span>{count}</span>
        </div>
        <img src="images\navbar_images\list-icon.svg" id={styles.ham} />
      </div>
    </nav>
  );
};

export default Navbar;
