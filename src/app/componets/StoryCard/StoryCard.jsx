import React from "react";
import Image from "next/image";
import storyImg from "../../../../public/story/general.jpg";
import madrasahLogo from "../../../../public/profile/madrasahLogo.jpg";
import styles from "./storycard.module.css";
import { CircleUser } from "lucide-react";
const StoryCard = () => {
  return (
    <div className={styles.storyCard}>
      <div className={styles.profile}>
        <Image
          className={styles.Image}
          src={madrasahLogo}
          alt="Story Image"
          height={1000}
          width={500}
        />
      </div>
      <div className={styles.storyImg}>
        <Image
          className={styles.Image}
          src={storyImg}
          alt="Story Image"
          height={1000}
          width={500}
        />
      </div>
      <h2 className={styles.storyTitle}>Student doing..</h2>
    </div>
  );
};

export default StoryCard;
