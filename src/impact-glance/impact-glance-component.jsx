import React from "react";
import { ImpactGlanceStyle } from "./impact-glance-style";

const ImpactGlanceComponent = () => {
  return (
    <ImpactGlanceStyle>
      <h1 className="heading">
        Impact at a <span>Glance</span>
      </h1>

      <div className="grid">



        <div className="box box1">
          <div>
            <h3>Colleges</h3>
            <p className="count">100+</p>
          </div>
          <img src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="college" />
        </div>


        <div className="box box2">
          <div>
            <h3>Students</h3>
            <p className="count">1,00,000</p>
          </div>
          <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="students" />
        </div>



        <div className="box box3">
          <div>
            <h3>Study Materials</h3>
            <p className="count">1000+</p>
          </div>
          <img src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="books" />
        </div>



        <div className="box box4">
          <div>
            <h3>Professional Trainers</h3>
            <p className="count">150</p>
          </div>
          <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="trainers" />
        </div>

      </div>
    </ImpactGlanceStyle>
  );
};

export default ImpactGlanceComponent;
