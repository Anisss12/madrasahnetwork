import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import {
  UserCircle,
  MessageCircle,
  Heart,
  Forward,
  BadgeCheck,
} from "lucide-react";
import EnglishPic from "../../../../public/post/english.jpg";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.profile}>
          <UserCircle size={40} />
          <div className={styles.profileName}>Madrasah Name</div>
          <div className={styles.verified}>
            <BadgeCheck className={styles.badge} />
          </div>
        </div>

        <div className={styles.follow}>Follow</div>
      </div>
      <div className={styles.postContent}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          repellat tempore, odit ab cumque dolore repudiandae adipisci,
          cupiditate ex, vitae quae rem sint. Commodi maiores eum voluptatem
          omnis blanditiis vitae.
        </p>
        <div className={styles.postImage}>
          <Image src={EnglishPic} width={500} height={500} alt="post" />
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.like}>
          <Heart />
        </div>
        <div className={styles.comment}>
          <MessageCircle />
        </div>
        <div className={styles.share}>
          <Forward />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
