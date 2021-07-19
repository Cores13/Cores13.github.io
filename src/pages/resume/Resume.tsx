import React from 'react'
import './Resume.css'
import {default as Timeline} from '../../components/timeline/Timeline'

export const Resume: React.FC = () =>{
    return (
        <>
            <div className='bg-color' >
                <div className='wrapper'>
                    <div className="resume">
                        <div className="resumeLeft">
                            <h1 className='resumeTitle'>Resume</h1><br></br>
                            <h4 className='resumeInfoName'>Amir Kasumović</h4>
                            <p className="resumeInfo"><i className="fas fa-university"></i>Engineer of Information Technology</p>
                            <p className="resumeInfo"><i className="fas fa-map-marker-alt"></i>Tuzla, Bosnia and Herzegovina</p>
                            <p className="resumeInfo"><i className="far fa-envelope"></i>amir.kasumovic@live.com</p>
                            <p className="resumeInfo"><i className="fas fa-phone-alt"></i>+387 61-248/126</p>
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
