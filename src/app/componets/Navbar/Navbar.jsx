import React from "react";
import styles from "./navbar.module.css";
import {
  House,
  Megaphone,
  AlignVerticalDistributeCenter,
  Settings,
  CircleUser,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileView}>Profile</div>
      <h2>Menus</h2>
      <div className={styles.menus}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <House />
            Home
          </li>
          <li className={styles.menuItem}>
            <Megaphone />
            Annoucment
          </li>
          <li className={styles.menuItem}>
            <AlignVerticalDistributeCenter />
            Events
          </li>
          <li className={styles.menuItem}>
            <Settings />
            Settings
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Profile
          </li>
        </ul>
      </div>
      <h2>Follwings</h2>

      <div className={styles.followings}>
        <ul className={styles.followingList}>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
          <li className={styles.menuItem}>
            <CircleUser />
            Darul Uloom
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
