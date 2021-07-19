import React, {useEffect} from 'react'
import './Landing.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Landing: React.FC = () =>{

    useEffect (() => {
        Aos.init({})
    }, []);

    return (
        <div className='bg-color' >
            <div className='wrapper' data-aos='zoom-in' data-aos-duration="700" data-aos-easing="linear">
                <div className="landing">
                    <div className="landingTop">
                        <div className="landingTopLeft">
                            <img src="./images/avatar.JPG" alt="avatar" className="avatar" />
                        </div>
                        <div className="landingTopRight">
                            <h1 className="titleName">Amir Kasumović</h1>
                            <p className="titleDev"><i className="fas fa-university"></i>Engineer of Information Technology</p>
                            <p className="titleDev"><i className="fas fa-map-marker-alt"></i>Tuzla, Bosnia and Herzegovina</p>
                            <p className="titleDev"><i className="far fa-envelope"></i>amir.kasumovic@live.com</p>
                            <p className="titleDev"><i className="fas fa-phone-alt"></i>+387 61-248/126</p>
                        </div>
                    </div>
                    <div className="landingBottom">
                        <div className="skillsWrapper">
                            <h3 className="skillsTitle">Full Stack Junior Web Developer</h3>
                            <hr/>
                            <div className="skillsIconWrapper">
                                <i className="fab fa-html5" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="700"></i>
                                <i className="fab fa-js-square" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="800"></i>
                                <i className="fab fa-react" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="900"></i>
                                <i className="fab fa-node-js" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="1000"></i>
                                <i className="fab fa-bootstrap" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="1100"></i>
                                <i className="fas fa-database" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-delay="1200"></i>
                            </div>
                            <p className="skills">HTML/CSS | Javascript | Typescript | React | Redux | NodeJS | Express | Bootstrap | MongoDB | MySQL</p>
                            <div className="socialWrapper">
                                <a href="https://github.com/Cores13" target="_blank" rel="noreferrer noopener"><i className="fab fa-github"></i></a>
                                <a href="https://ba.linkedin.com/in/amir-kasumovic-b02507163" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.freecodecamp.org/fcc32976c45-726f-4a6f-a4e3-fc7756ea44c6" target="_blank" rel="noreferrer noopener"><i className="fab fa-free-code-camp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
