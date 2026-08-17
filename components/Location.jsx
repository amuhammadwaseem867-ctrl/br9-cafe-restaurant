"use client";

import { motion } from "framer-motion";
import "./Location.css";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=BR+9+Cafe+%26+Restaurant+Bahria+Town+Rawalpindi";

export default function Location() {
  return (
    <section className="br9-location" id="location">
      <div className="br9-location-container">

        {/* HEADER */}
        <motion.header
          className="br9-location-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="br9-location-eyebrow">
              05 / FIND US
            </span>

            <h2>
              Come find
              <br />
              <em>your spot.</em>
            </h2>
          </div>

          <p>
            Whether you're joining us for dinner, catching up
            with friends, or settling in for a late-night
            rooftop session, BR 9 is waiting.
          </p>
        </motion.header>

        {/* LOCATION GRID */}
        <div className="br9-location-grid">

          {/* DETAILS */}
          <motion.div
            className="br9-location-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="br9-location-block">
              <span className="br9-location-label">
                ADDRESS
              </span>

              <h3>
                Pine Marina Plaza #9
                <br />
                4 Corniche Road
                <br />
                Bahria Town Phase 4
                <br />
                Rawalpindi
              </h3>
            </div>

            {/* CONTACT INFO */}
            <div className="br9-location-info-grid">

              <div className="br9-location-info">
                <span className="br9-location-label">
                  CALL US
                </span>

                <a href="tel:+923145757569">
                  +92 314 5757569
                </a>
              </div>

              <div className="br9-location-info">
                <span className="br9-location-label">
                  HOURS
                </span>

                <p>
                  Open 24 Hours
                </p>
              </div>

            </div>

            {/* FEATURES */}
            <div className="br9-location-features">

              <div>
                <span>01</span>
                <p>Rooftop Dining</p>
              </div>

              <div>
                <span>02</span>
                <p>Dine In</p>
              </div>

              <div>
                <span>03</span>
                <p>Takeaway</p>
              </div>

            </div>

            {/* DIRECTIONS */}
            <a
              className="br9-directions-button"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get Directions</span>
              <strong>↗</strong>
            </a>

          </motion.div>

          {/* GOOGLE MAP */}
          <motion.div
            className="br9-map-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="br9-map-top">
              <span>BR 9 / BAHRIA TOWN</span>
              <span>RAWALPINDI</span>
            </div>

            <div className="br9-google-map">

              <iframe
                title="BR 9 Cafe & Restaurant Location"
                src="https://www.google.com/maps?q=BR%209%20Cafe%20%26%20Restaurant%20Bahria%20Town%20Rawalpindi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="br9-map-overlay">
                <span>BR 9</span>
                <small>CAFE & RESTAURANT</small>
              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          className="br9-location-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>
            SEE YOU AT BR 9
          </span>

          <strong>
            Bahria Town, Rawalpindi
          </strong>

          <a href="#order">
            Order Your Table <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}