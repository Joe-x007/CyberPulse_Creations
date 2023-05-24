import React from 'react';
import './Hero.css';
import codingImage from '../assets/Coding.jpg';
import appImage from '../assets/app.jpg';
import customImage from '../assets/custom.jpg';
import ctaImage from '../assets/cta.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="intro">
                <h1 className="intro-text">
                    Welcome to <span className="cyberpulse">CyberPulse</span>{" "}
                    <span className="creations">Creations</span>!
                </h1>
            </div>
            <div className="hover-rectangles">
                {/* Box 1 */}
                <div className="hover-rectangle active">
                    <div
                        className="image-container"
                        style={{
                            backgroundImage: `url(${codingImage})`,
                            filter: 'blur(5px)', // Apply the blur effect
                        }}
                    ></div>

                    <div className="box-content">
                        <h3 className="fade-text">Web Development</h3>
                        <div className="header-content">
                            <h2 className="header-title">Custom Web Solutions</h2>
                            <p className="header-description">
                                We specialize in building responsive and scalable web applications tailored to your specific business needs.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Box 2 */}
                <div className="hover-rectangle active">
                    <div
                        className="image-container"
                        style={{
                            backgroundImage: `url(${appImage})`,
                            filter: 'blur(5px)', // Apply the blur effect
                        }}
                    ></div>

                    <div className="box-content">
                        <h3 className="fade-text">Mobile App Development</h3>
                        <div className="header-content">
                            <h2 className="header-title">Innovative Mobile Solutions</h2>
                            <p className="header-description">
                                We create cutting-edge mobile apps for iOS and Android platforms that drive user engagement and satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Box 3 */}
                <div className="hover-rectangle active">
                    <div
                        className="image-container"
                        style={{
                            backgroundImage: `url(${customImage})`,
                            filter: 'blur(5px)', // Apply the blur effect
                        }}
                    ></div>

                    <div className="box-content">
                        <h3 className="fade-text">Custom Solutions</h3>
                        <div className="header-content">
                            <h2 className="header-title">Tailored to Your Needs</h2>
                            <p className="header-description">
                                We deliver bespoke solutions that perfectly align with your unique business requirements, ensuring optimal performance and usability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="cta-image">
                    <img src={ctaImage} alt="CTA" />
                </div>
                <div className="cta-content">
                    <h2 className="cta-heading">Choose Your Path</h2>
                    <p className="cta-description">
                        Discover our custom web and mobile solutions tailored to your business needs. Take the next step towards success.
                    </p>
                    <div className="cta-buttons">
                        <a href="/pricing" className="cta-button red-pill">Discover Pricing</a>
                        <a href="/contact" className="cta-button blue-pill">Contact Us Today</a>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="about-section">
                {/*<div className="about-image">*/}
                {/*    <img src={aboutImage} alt="About" />*/}
                {/*</div>*/}
                <div className="about-content">
                    <h2 className="about-heading">About Us</h2>
                    <p className="about-description">
                        At CyberPulse Creations, we breathe life into your ideas. We are a dynamic team of passionate developers who are committed to bringing excellence to the digital world. We have a knack for transforming complex business problems into seamless digital solutions. Our expertise spans across web and mobile application development, specializing in building custom, scalable, and user-friendly designs. We are more than just coders, we are your partners in navigating the digital landscape. With CyberPulse Creations, rest assured, your vision is our mission.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
