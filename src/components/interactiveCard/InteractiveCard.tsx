import React, {useEffect, useState} from 'react';
import './InteractiveCard.css';
import Tilt from 'react-parallax-tilt';
import {IProps as Props} from '../../pages/projects/Projects';


interface IProps {
    img: Props['img'];
    projectName: Props['projectName'];
    projectDesc: Props['projectDesc'];
    projectGithub: Props['projectGithub'];
    projectCodepen: Props['projectCodepen'];
}

export const InteractiveCard: React.FC<IProps>= ({img, projectName, projectDesc, projectGithub, projectCodepen}) => {
    
      return (
        <>
            <div className="cardWrapper">
                <Tilt>
                <div className="card">
                    <div className="cardTop">
                        <img className='cardImg' src={`${img}`} alt="" />
                    </div>
                    <div className="cardBottom">
                        <h4 className='cardTitle'>{projectName}</h4>
                        <p className='cardDesc'>{projectDesc}</p>
                        <a className='cardGithub' href={`${projectGithub}`}><button><i className="fab fa-github"></i></button></a>
                        {projectCodepen? <><a className='cardCodepen' href={`${projectCodepen}`}><button><i className="fab fa-github"></i></button></a></>: null}
                    </div>
                </div>
                </Tilt>
            </div>
        </>
      )
    }