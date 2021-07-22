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
                        <InteractiveCard img={'ideaverse.png'} projectName={'IdeaVerse'} projectDesc={'erhusertuaserhtydetrherhuser tuaserhtydetrherhusertuaserhtydetrh'} projectGithub={'flappy_bird'} projectCodepen={'hesrh'}/>
                        <InteractiveCard img={'ideamaze.png'} projectName={'IdeaMaze'} projectDesc={'erhusertuaserhtydetrhe rhusertuaserhtydetrh erhusertuaserhtydetrh'} projectGithub={'maze_game'} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'IdeaDifferences'} projectDesc={'erhusertuaserhtydetrherhusert uaserhtydetrherhusertuaserhtydetrh'} projectGithub={'difference_game'} projectCodepen={''}/>
                        <InteractiveCard img={'ideaspace.png'} projectName={'Idea SpaceDefender'} projectDesc={'erhusertuaserhtyde trherhusertuaserhtydetr herhusertuaserhtydetrh'} projectGithub={'space_invaders'} projectCodepen={''}/>
                        <InteractiveCard img={'quizie.png'} projectName={'Quizzie'} projectDesc={'erhusertuaserhtydetrherhusertuas erhtydetrherhusertuaserhtydetrh'} projectGithub={'quiz_app'} projectCodepen={''}/>
                        <InteractiveCard img={'stranger.png'} projectName={'Stranger'} projectDesc={'erhusertuaserhtydetrherhusertua serhtydetrherhusertuaserhtydetrh'} projectGithub={'social_media'} projectCodepen={''}/>
                        <InteractiveCard img={'todos.png'} projectName={'Todo list'} projectDesc={'erhusertuaserhtydetrherhusertua serhtydetrherhusertuaserhtydetrh'} projectGithub={'to_do_list_app'} projectCodepen={'erhsedhr'}/>
                        <InteractiveCard img={'cart.png'} projectName={'eCommerce'} projectDesc={'erhusertuaserhtydetrherhusertu aserhtydetrherhusertuaserhtydetrh'} projectGithub={'e_commerce_site'} projectCodepen={''}/>
                        {/* <InteractiveCard img={''} projectName={'VueJS Practice site'} projectDesc={''} projectGithub={''} projectCodepen={''}/> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
