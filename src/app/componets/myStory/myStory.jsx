import React from "react";
import Image from "next/image";

import styles from "./mystory.module.css";
import { Plus } from "lucide-react";
const StoryCard = () => {
  return (
    <div className={styles.storyCard}>
      <div className={styles.add}>
        <Plus size={40} />
      </div>
      <h2>Create</h2>
    </div>
  );
};

export default StoryCard;
