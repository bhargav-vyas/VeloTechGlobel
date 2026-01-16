"use client";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span>VTG</span>
        <p>VeloTechGlobal</p>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Solutions</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
