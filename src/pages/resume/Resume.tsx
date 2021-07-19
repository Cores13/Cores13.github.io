import React from 'react'
import './Resume.css'
import {default as Timeline} from '../../components/timeline/Timeline'

export const Resume: React.FC = () =>{
    return (
        <>
            <div className='bg-color' >
                <div className='wrapper'>
                    <div className="resume">
                        <div className="resumeTop">
                            <h1 className='resumeTitle'>Resume</h1><br></br>
                        </div>
                        <div className="resumeBottom">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
