"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`br9-navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="br9-navbar-inner">

        <Link
          href="#home"
          className="br9-logo"
          onClick={closeMenu}
        >
          <span className="br9-logo-main">BR 9</span>
          <span className="br9-logo-sub">
            CAFE & RESTAURANT
          </span>
        </Link>


        <nav className="br9-desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <Link
          href="#order"
          className="br9-order-button"
        >
          <span>Order Now</span>
          <span className="br9-order-arrow">↗</span>
        </Link>


        <button
          type="button"
          className={`br9-menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </div>


      <div className="br9-mobile-menu">
        <nav>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#order"
            className="br9-mobile-order"
            onClick={closeMenu}
          >
            <span>Order Now</span>
            <span>↗</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}