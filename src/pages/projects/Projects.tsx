import React, {useEffect} from 'react'
import './Projects.css'
import { InteractiveCard } from '../../components/interactiveCard/InteractiveCard';
import Aos from 'aos'
import 'aos/dist/aos.css'

export interface IProps {
    img?: string;
    projectName?: string;
    projectDesc?: string;
    projectGithub?: string;
    projectCodepen?: string;
}

export const Projects: React.FC = () =>{

    useEffect (() => {
        Aos.init({})
    }, []);

    return (
        <>
        <div className='bg-color' >
            <div className='projectsWrapper' data-aos='zoom-in' data-aos-duration="500" data-aos-easing="linear">
                <div className="projects">
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    <InteractiveCard img={''} projectName={''} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                </div>
            </div>
        </div>
    </>
    )
}
