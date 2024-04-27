import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-title">About VaidyaVaani</p>
            <p>
            Lorem ipsum dolor sit amet 
            </p>
          </div>
          <div className="footer-section">
            <p className="footer-title">For Hospitals</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum, veritatis atque eligendi alias temporibus minima, facere dolorem quam mollitia libero quasi cum! Placeat, laboriosam a. Expedita quas aut eos.
            </p>
          </div>
          <div className="footer-section">
            <p className="footer-title">Learn More</p>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <p className="footer-title">Connect with Us</p>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; {year} VaidyaVaani</p>
      </div>
    </footer>
  );
};

export default Footer;