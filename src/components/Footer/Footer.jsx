import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>
              Let's Collaborate <br />
              siddharthbhat20<span>@</span>gmail.com
            </h3>
          </Link>

          <p className="secondary">
            From short films to full productions — I'm always open to creative
            collaborations. Feel free to reach out anytime.
          </p>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Siddharth</h1>
          <h1>Bhat</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Siddharth Bhat 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
