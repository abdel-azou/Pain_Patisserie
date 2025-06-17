import React from 'react';
import './Services.css';

const Services: React.FC = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Service One</h3>
                    <p>Description of service one.</p>
                </div>
                <div className="service-item">
                    <h3>Service Two</h3>
                    <p>Description of service two.</p>
                </div>
                <div className="service-item">
                    <h3>Service Three</h3>
                    <p>Description of service three.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;