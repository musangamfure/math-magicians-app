import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/navbar.module.css';

const Navbar = () => (
  <header className={styles.navbar}>
    <h1 className={styles.heading}>Math Magicians</h1>
    <ul className={styles.links}>
      <li>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className={styles.link}>
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className={styles.link}>
          Quote
        </Link>
      </li>
    </ul>
  </header>
);
export default Navbar;
