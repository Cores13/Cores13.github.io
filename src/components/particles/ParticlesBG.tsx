import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from './config';

export const ParticlesBG: React.FC = () => {
    return (
        <Particles height="100vh" width="100vw" params={{particlesConfig}} className="particles"></Particles>
    );
}