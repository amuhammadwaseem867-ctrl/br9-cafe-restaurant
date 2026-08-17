"use client";

import { motion } from "framer-motion";
import "./Footer.css";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/br9officials/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Order", href: "#order" },
  { label: "Find Us", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="br9-footer">
      <div className="br9-footer-container">

        {/* FOOTER TOP */}

        <motion.div
          className="br9-footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* BRAND */}

          <div className="br9-footer-brand">
            <span className="br9-footer-eyebrow">
              BR 9 / BAHRIA TOWN
            </span>

            <h2>
              BR 9
              <span>CAFE & RESTAURANT</span>
            </h2>

            <p>
              Good food. Good people.
              <br />
              Good times.
            </p>
          </div>


          {/* EXPLORE */}

          <div className="br9-footer-column">
            <span className="br9-footer-label">
              EXPLORE
            </span>

            <nav>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>


          {/* CONTACT */}

          <div className="br9-footer-column">
            <span className="br9-footer-label">
              CONTACT
            </span>

            <a href="tel:+923145757569">
              +92 314 5757569
            </a>

            <p>
              Pine Marina Plaza #9
              <br />
              4 Corniche Road
              <br />
              Bahria Town Phase 4
              <br />
              Rawalpindi
            </p>
          </div>


          {/* SOCIAL */}

          <div className="br9-footer-column">
            <span className="br9-footer-label">
              FOLLOW US
            </span>

            <div className="br9-footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.label}</span>
                  <strong>↗</strong>
                </a>
              ))}
            </div>
          </div>

        </motion.div>


        {/* CTA */}

        <motion.div
          className="br9-footer-cta"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div>
            <span>
              OPEN 24 HOURS
            </span>

            <h3>
              Hungry?
              <em>Let's fix that.</em>
            </h3>
          </div>

          <a href="#order">
            <span>Order Now</span>
            <strong>↗</strong>
          </a>

        </motion.div>


        {/* BOTTOM */}

        <div className="br9-footer-bottom">

          <span>
            © {new Date().getFullYear()} BR 9 CAFE & RESTAURANT
          </span>

          <span>
            BAHRIA TOWN · RAWALPINDI
          </span>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </div>

      </div>
    </footer>
  );
}