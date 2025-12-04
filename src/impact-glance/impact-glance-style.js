import styled from "styled-components";

export const ImpactGlanceStyle = styled.div`

  width: 100%;
  padding: 20px 0 50px;

  .heading {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 35px;
  }

  .heading span {
    color: #ff3b57;
  }


  .grid {
    width: 1150px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px 35px;   /* row gap:20, column gap:25 */
  }

  .box {
    height: 18px;                /* exact height */
    border-radius:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 40px;            /* exact spacing */
  }

  /* EXACT FONT SIZE FROM SCREENSHOT */
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  .count {
    font-size: 32px;
    font-weight: 800;
    margin-top: 8px;
  }

  /* Box background colors EXACT */
  .box1 { background: #fce1e7; }
  .box2 { background: #dff0ff; }
  .box3 { background: #eaffef; }
  .box4 { background: #ffe8c8; }

  /* IMAGE SIZE EXACT */
  img {
    width: 100px;
    height: auto;
    margin-left: 20px;
  }

  /* Mobile */
  @media (max-width: 900px) {
    .grid {
      width: 95%;
      grid-template-columns: 1fr;
    }
    .box {
      height: auto;
      padding: 20px;
    }
    img {
      width: 80px;
    }
  }

`;
