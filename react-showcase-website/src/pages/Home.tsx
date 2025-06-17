import React from 'react';
import Hero from '../components/Sections/Hero/Hero';
import About from '../components/Sections/About/About';
import Services from '../components/Sections/Services/Services';
import Contact from '../components/Sections/Contact/Contact';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;