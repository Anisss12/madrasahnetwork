import React from "react";
import styles from "./topbar.module.css";
import { Bell, User, CircleUserRound } from "lucide-react";
const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logoM}>M</span>Network
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.tools}>
        <Bell />
        <User />
      </div>
      <div className={styles.profile}>
        <CircleUserRound size={35} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Topbar;
