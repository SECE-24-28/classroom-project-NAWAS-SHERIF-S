import styled from "styled-components";

export const OurCoursesStyle = styled.div`

  .heading {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin-top: 20px;
  }

  .subhead {
    text-align: center;
    color: #555;
    font-size: 18px;
    max-width: 700px;
    margin: auto;
    margin-bottom: 40px;
  }

  /* Container for all cards */
  .course-container {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
    padding: 20px;
  }

  /* CARD */
  .card {
    width: 330px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    padding: 15px;
    text-align: left;
    transition: 0.3s ease;
  }

  .card:hover {
    box-shadow: 0px 6px 18px rgba(0,0,0,0.1);
  }

  .course-img {
    width: 100%;
    border-radius: 10px;
  }

  .rating {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .rating span {
    margin-left: 6px;
  }

  h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
  }

  .description {
    color: #555;
    margin: 2px 0;
  }

  /* Price Section */
  .price-row {
    margin-top: 10px;
  }

  .price {
    font-size: 22px;
    font-weight: 700;
  }

  .price span {
    font-size: 15px;
    font-weight: 600;
  }

  .old-price {
    text-decoration: line-through;
    color: #888;
    margin-top: -5px;
  }

  /* Buttons */
  .btn-row {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .buy-btn {
    flex: 1;
    background: #ff3b3b;
    border: none;
    padding: 12px 0;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }

  .know-btn {
    flex: 1;
    background: #e5e5e5;
    border: none;
    padding: 12px 0;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }

`;
