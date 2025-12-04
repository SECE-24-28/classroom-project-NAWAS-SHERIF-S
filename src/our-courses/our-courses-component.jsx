import React from "react";
import { OurCoursesStyle } from "./our-courses-style";

const OurCoursesComponent = () => {
  return (
    <OurCoursesStyle>
      <h1 className="heading">Our Courses</h1>
      <p className="subhead">
        Explore a wide range of curated courses for every learner. Structured to
        enhance knowledge, skills, and career growth.
      </p>

      <div className="course-container">

        {/* CARD 1 */}
        <div className="card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg"
            alt="Aptitude Complete Preparation"
            className="course-img"
          />

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>5</span>
          </div>

          <h3>Aptitude Complete Preparation</h3>
          <p className="description">Recommended: Final year students</p>
          <p className="description">Duration: 1 Year</p>

          <div className="price-row">
            <p className="price">₹ 12,000 <span>+ GST</span></p>
            <p className="old-price">₹ 24,999</p>
          </div>

          <div className="btn-row">
            <button className="buy-btn">Buy Now</button>
            <button className="know-btn">Know More</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png"
            alt="Technical Complete Preparation"
            className="course-img"
          />

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>4.9</span>
          </div>

          <h3>Technical Complete Preparation</h3>
          <p className="description">Recommended: Final year students</p>
          <p className="description">Duration: 1 Year</p>

          <div className="price-row">
            <p className="price">₹ 12,000 <span>+ GST</span></p>
            <p className="old-price">₹ 24,999</p>
          </div>

          <div className="btn-row">
            <button className="buy-btn">Buy Now</button>
            <button className="know-btn">Know More</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png"
            alt="MERN Fullstack"
            className="course-img"
          />

          <div className="rating">
            ⭐⭐⭐⭐✰ <span>4.4</span>
          </div>

          <h3>MERN Fullstack</h3>
          <p className="description">Recommended: Final year students</p>
          <p className="description">Duration: 1 Year</p>

          <div className="price-row">
            <p className="price">₹ 29,999 <span>+ GST</span></p>
            <p className="old-price">₹ 39,999</p>
          </div>

          <div className="btn-row">
            <button className="buy-btn">Buy Now</button>
            <button className="know-btn">Know More</button>
          </div>
        </div>

      </div>
    </OurCoursesStyle>
  );
};

export default OurCoursesComponent;
