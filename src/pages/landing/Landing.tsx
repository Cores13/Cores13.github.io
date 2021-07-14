import React from 'react'
import './Landing.css'
// import { Grid, Cell } from 'react-mdl';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Landing: React.FC = () =>{
    return (
        <div className='bg-color' >
            <div className='wrapper' style={{width: '80%'}}>
                <div className="landing">
                    <div className="landingTop">
                        <div className="landingTopLeft">
                            <img src="./images/avatar.JPG" alt="avatar" className="avatar" />
                        </div>
                        <div className="landingTopRight">
                            <h1 className="titleName">Amir Kasumović</h1>
                            <p className="titleDev">Bachelor of Information Technology</p>
                            <p className="titleDev">Tuzla, Bosnia and Herzegovina</p>
                            <p className="titleDev">amir.kasumovic@live.com</p>
                        </div>
                    </div>
                    <div className="landingBottom">
                        <div className="skillsWrapper">
                            <h3 className="skillsTitle">Full Stack Junior Web Developer</h3>
                            <hr/>
                            <div className="skillsIconWrapper">
                                {/* TODO: SIZE */}
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-js-square"></i>
                                <i className="fab fa-react"></i>
                                <i className="fab fa-node-js"></i>
                                <i className="fab fa-bootstrap"></i>
                                <i className="fas fa-database"></i>
                            </div>
                            <p className="skills">HTML/CSS | Javascript | Typescript | React | Redux | NodeJS | Express | Bootstrap | MongoDB | MySQL</p>
                            <div className="socialWrapper">
                                <i className="fab fa-github-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-free-code-camp"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
