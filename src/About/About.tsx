import React from 'react';
import './About.css';

import AboutPageText from "../ReUsableComponents/AboutPageText/AboutPageText";

class About extends React.Component {
    render() {
        const headingText1 = <span>The process of buying and selling a home should be simple and enjoyable.</span>;
        const descriptionText1 = <span>Our mission is simple. We aim to provide a platform where individuals are able to gain knowledge of the real estate process and help bridge the gap between agents, lenders and other service providers. Through this process, clients receive excellent service and service providers gain valuable clients.</span>;

        const headingText2 = <span>Multiple problems, One solution </span>;
        const descriptionText2 = <span>Our goal is to become your partner when it comes to buying and selling real estate while focusing on communication and results. We thrive on bringing people together and making the transaction as simple and enjoyable as possible. Real estate can be fun, educational, and exciting, no matter what side of the deal you are on.</span>;
        return(
            <div className="about-page-root">
                <AboutPageText headingText={headingText1} descriptionText={descriptionText1} />
                <img className="about-page-image" src={require("./AboutPageImage 1.png")} />
                {/*<hr className="about-page-division" />*/}
                {/*<div className="about-page-text-under-image">*/}
                {/*    /!*<div className="about-page-text-under-image-left">fun fact</div>*!/*/}
                {/*    <div className="about-page-text-under-image-right">The process of buying and selling real estate is not usually complex but it has been operating in a blurry for decades. Vendido was founded by two real estate buyers as well as sellers who understand the pain points of each one of the major real estate stakeholders in the current state. They felt the need of an online one-stop shop for everyone in this space to come and collaborate to eliminate all the guess work involved in the process and strike the best deals.</div>*/}
                {/*</div>*/}
                <AboutPageText headingText={headingText2} descriptionText={descriptionText2} />
                <div className="about-page-green-box-text-root">
                    <div className="about-page-green-box-heading">Our DNA Fundamentals</div><br/><br/>
                    <div className="about-page-green-box-text">
                        <div className="about-page-green-box-heading-text">passion for change</div>
                        <div className="about-page-green-box-description-text">Vendido doesn’t accept the status quo, neither should you, our passion for change is what keeps us asking questions and moving forward to develop products that help our partners achieve success.</div>
                        <div className="about-page-green-box-empty"></div>
                    </div>
                    <div className="about-page-green-box-text about-page-green-box-align-right-text">
                        <div className="about-page-green-box-empty"></div>
                        <div className="about-page-green-box-description-text">Our customers are at the core of everything we do. We focus on listening and implementing valuable feedback that promote solutions while building a personalized experience for our partners and clients.</div>
                        <div className="about-page-green-box-heading-text">customer-first focus</div>
                    </div>
                    <div className="about-page-green-box-text">
                        <div className="about-page-green-box-heading-text">leading with integrity and compassion</div>
                        <div className="about-page-green-box-description-text">We believe that compassion and integrity builds trust amongst our partners and clients. We want to attract and retain innovators and partners that feel the same. Together, we can create a culture and platform that promotes growth. Building a successful business starts with building a trustworthy team worthy of success.</div>
                        <div className="about-page-green-box-empty"></div>
                    </div>
                    <div className="about-page-green-box-text about-page-green-box-align-right-text">
                        <div className="about-page-green-box-empty"></div>
                        <div className="about-page-green-box-description-text">We are driven by solutions, not ego. Our focus is to learn and understand our partners needs and the needs of their clients. Our goal is to implement these solutions and make the process of buying and selling real estate simple and enjoyable. It truly takes more than two to close a deal.</div>
                        <div className="about-page-green-box-heading-text">teamwork</div>
                    </div>
                    {/*<div className="about-page-green-box-text">*/}
                    {/*    <div className="about-page-green-box-heading-text">teamwork</div>*/}
                    {/*    <div className="about-page-green-box-description-text">We believe in bringing the team together and giving everyone a seat at the table to learn about their experiences whether it is their experience with our customers or other stakeholders take their feedback seriously.</div>*/}
                    {/*    <div className="about-page-green-box-empty"></div>*/}
                    {/*</div>*/}
                    {/*<div className="about-page-green-box-text about-page-green-box-align-right-text">*/}
                    {/*    <div className="about-page-green-box-empty"></div>*/}
                    {/*    <div className="about-page-green-box-description-text">Being honest with each other keeps us grounded and true to ourselves about the areas doing well, which ones need attention and what can we do better one day at a time to make our customers experiences better.</div>*/}
                    {/*    <div className="about-page-green-box-heading-text">honesty</div>*/}
                    {/*</div>*/}
                </div>
                <div className="about-page-intro">Meet our squad</div>
                <hr className="about-page-division-last" />
                <div className="about-page-member-info-root">
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./jim.png")} />
                        <div className="about-page-member-name">Jim Gonzalez</div>
                        <div className="about-page-member-title">Co-founder</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./damien.jpg")} />
                        <div className="about-page-member-name">Damien Ogden</div>
                        <div className="about-page-member-title">Co-founder</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./leena.png")} />
                        <div className="about-page-member-name">Leena Poodipeddi</div>
                        <div className="about-page-member-title">Director of Marketing</div>
                    </div>
                    <div className="about-page-member-info">
                        <img className="about-page-member-picture" src={require("./prasant.png")} />
                        <div className="about-page-member-name">Prasant Poodipeddi</div>
                        <div className="about-page-member-title">Director of User Experience</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;