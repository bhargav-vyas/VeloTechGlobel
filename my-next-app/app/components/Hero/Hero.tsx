"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Building Secure Digital Solutions</h1>
        <p>
          Enterprise-grade technology services designed for scale, security,
          and long-term growth.
        </p>
      </motion.div>
    </section>
  );
}
