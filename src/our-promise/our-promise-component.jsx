import React from "react";
import { OurPromiseStyle } from "./our-promise-style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileScreen, faPeopleGroup, faDiamondTurnRight, faLifeRing, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle>

      <div className="heading">
                <h2 className="title">Our Promise</h2>
                <p className="sub-title">As part of our high quality service, we'd like to offer something extra too.</p>
            </div>
            <div className="flex">
                <div className="child1">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faLaptopCode} className="icon1" />
                        <span className="head">Top Code Quality</span>
                    </div>
                    <br/>
                    <span className="details">Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.</span>
                </div>
                <div className="child2">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faMobileScreen} className="icon2" />
                        <span className="head">Responsive</span>
                    </div>
                    <br/>
                    <span className="details">We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</span>
                </div>
                <div className="child3">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faPeopleGroup} className="icon3" />
                        <span className="head">Rockstar Team</span>
                    </div>
                    <br/>
                    <span className="details">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</span>
                </div>
            </div>
            <div className="flex2">
                <div className="child4">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faDiamondTurnRight} className="icon4"/>
                        <span className="head">Fast Turn-arounds</span>
                    </div>
                    <br/>
                    <span className="details">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.</span>
                </div>
                <div className="child5">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faLifeRing} className="icon5"/>
                        <span className="head">Life-time support</span>
                    </div>
                    <br/>
                    <span className="details">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</span>
                </div>
                <div className="child6">
                    <div className="sameline">
                        <FontAwesomeIcon icon={faShieldHalved} className="icon6"/>
                        <span className="head">Secured Agreement</span>
                    </div>
                    <br/>
                    <span className="details">The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).</span>
                </div>
            </div>

    </OurPromiseStyle>
  );
};

export default OurPromiseComponent;