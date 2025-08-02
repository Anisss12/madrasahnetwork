import React from "react";
import styles from "./postbox.module.css";
import { Image, FilePenLine, CircleUserRound } from "lucide-react";
const PostBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <CircleUserRound strokeWidth={1} size={40} />
      </div>
      <div className={styles.inputBox}>
        <input type="text" name="" placeholder="Write something..." id="" />
      </div>
      <div className={styles.postItem}>
        <Image />
        <FilePenLine />
      </div>
    </div>
  );
};

export default PostBox;
