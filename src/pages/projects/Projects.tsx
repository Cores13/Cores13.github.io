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
                    <div className="projectsTop">
                        <h1 className="projectsTitle">Projects</h1>
                    </div>
                    <div className="projectsBottom">
                        <InteractiveCard img={''} projectName={'Todo list'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'Quizzie'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'Stranger'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'eCommerce'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        {/* <InteractiveCard img={''} projectName={'VueJS Practice site'} projectDesc={''} projectGithub={''} projectCodepen={''}/> */}
                        <InteractiveCard img={''} projectName={'IdeaVerse'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'IdeaMaze'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'IdeaDifferences'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'Idea SpaceDefenter'} projectDesc={''} projectGithub={''} projectCodepen={''}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
