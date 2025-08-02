import React from "react";
import styles from "./home.module.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import StoryCard from "../StoryCard/StoryCard";
import PostCard from "../PostCard/PostCard";
import MyStory from "../myStory/myStory";
import PostBox from "../PostBox/PostBox";
const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <Topbar />

      <div className={styles.content}>
        <div className={styles.storyBar}>
          <MyStory />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
        <div className={styles.postBox}>
          {" "}
          <PostBox />
        </div>

        <div className={styles.postSection}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>

      <div className={styles.rightBar}></div>
    </div>
  );
};

export default Home;
