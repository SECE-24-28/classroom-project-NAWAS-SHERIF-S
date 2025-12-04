import styled from "styled-components";

export const OurPromiseStyle = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .heading {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subhead {
    text-align: center;
    font-size: 18px;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  /* 3-column grid for desktop */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 40px;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  /* Top colored line */
  .line {
    height: 4px;
    width: 60px;
    margin-bottom: 24px;
    border-radius: 2px;
  }

  .line1 { background: #4db6ac; }
  .line2 { background: #fbc02d; }
  .line3 { background: #00acc1; }
  .line4 { background: #9575cd; }
  .line5 { background: #e53935; }
  .line6 { background: #43a047; }

  .icon {
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #1f2937;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: #6b7280;
    margin: 0;
  }

  /* Tablet: 2 columns */
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 30px;
    }
  }

  /* Mobile: 1 column */
  @media (max-width: 600px) {
    padding: 60px 20px;
    
    .heading {
      font-size: 36px;
    }
    
    .subhead {
      font-size: 16px;
    }
    
    .grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    h3 {
      font-size: 20px;
    }
    
    p {
      font-size: 15px;
    }
  }
`;