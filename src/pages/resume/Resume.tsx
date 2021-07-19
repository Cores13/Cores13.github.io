import React from 'react'
import './Resume.css'
import {CustomTimeline as Timeline} from '../../components/timeline/Timeline'

export const Resume: React.FC = () =>{
    return (
        <>
            <div className='bg-color' >
                {/* Width: 1177 Height: 805 */}
                <div className='wrapper'>
                    <div className="resume">
                        <div className="resumeLeft">
                            <h1 className='resumeTitle'>Resume</h1><br></br>
                            <h4 className='resumeInfoName'>Amir Kasumović</h4>
                            <p className="resumeInfo"><i className="fas fa-university"></i>Engineer of Information Technology</p>
                            <p className="resumeInfo"><i className="fas fa-map-marker-alt"></i>Tuzla, Bosnia and Herzegovina</p>
                            <p className="resumeInfo"><i className="far fa-envelope"></i>amir.kasumovic@live.com</p>
                            <p className="resumeInfo"><i className="fas fa-phone-alt"></i>+387 61-248/126</p>
                            <a className="resumeInfo" href="https://ba.linkedin.com/in/amir-kasumovic-b02507163" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-linkedin"></i>LinkedIn</a>
                            <a className="resumeInfo" href="https://github.com/Cores13" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-github"></i>Github</a>
                        </div>
                        <div className="resumeRight">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
