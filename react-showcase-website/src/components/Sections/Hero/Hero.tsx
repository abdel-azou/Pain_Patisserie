import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Our Showcase</h1>
                <p>Discover amazing projects and services we offer.</p>
                <a href="#services" className="cta-button">Explore Services</a>
            </div>
        </section>
    );
};

export default Hero;