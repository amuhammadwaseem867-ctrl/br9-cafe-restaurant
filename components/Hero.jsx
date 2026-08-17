"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="br9-hero" id="home">
      <div className="br9-hero-image" />

      <div className="br9-hero-overlay" />

      <div className="br9-hero-content">
        <motion.p
          className="br9-hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          BAHRIA TOWN · RAWALPINDI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Dine
          <span>Beyond</span>
          Ordinary.
        </motion.h1>

        <motion.p
          className="br9-hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          A place for great food, late nights,
          <br />
          and moments worth staying for.
        </motion.p>

        <motion.div
          className="br9-hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#menu" className="br9-hero-primary">
            Explore Menu
            <span>↗</span>
          </a>

          <a href="#location" className="br9-hero-secondary">
            Find Us
          </a>
        </motion.div>
      </div>

      <motion.div
        className="br9-hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="br9-hero-info">
          <span>OPEN</span>
          <strong>24 HOURS</strong>
        </div>

        <div className="br9-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="br9-scroll-line" />
        </div>

        <div className="br9-hero-info br9-hero-info-right">
          <span>EST.</span>
          <strong>BR 09</strong>
        </div>
      </motion.div>
    </section>
  );
}