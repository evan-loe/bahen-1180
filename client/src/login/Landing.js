import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import BookAnimate from "./BookAnimate";

import styles from "./landing.module.css";

import { pageVariants, pageTransition } from "../Transitions";

function Landing() {
  const books = [1, 5, 3, 9, 2, 11, 7, 4, 8, 12];

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div className={styles.bookContainer} style={{}}>
        <BookAnimate books={books}></BookAnimate>
      </motion.div>
      <div className={styles.landingParent}>
        <div className={styles.mainContainer}>
          <h1>Welcome to Bahen 1180</h1>
          <Link className={styles.link} to="/register">
            If you're new click me to register!
          </Link>
          &nbsp;
          <Link className={styles.link} to="/login">
            Login Link!!
          </Link>
          &nbsp;
          <Link className={styles.link} to="/privacypolicy">
            Privacy Policy
          </Link>
          &nbsp;
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
