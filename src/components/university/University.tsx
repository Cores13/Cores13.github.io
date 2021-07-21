import React from 'react';
import './University.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
}

export const University: React.FC<IProps> = ({page, setPage}) => {

    const handleClick = ():void => {
        setPage('home');
    }
    return (
        <div className="university">
            <div className="universityTop">
                <h1 className="universityTitle">University</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="universityBottom">
                <div><h4 className="universityTitle">Engineer of Information Technology</h4>
                    <h6 className="universityTitle">American University in Bosnia and Herzegovina, Tuzla, Bosnia and Herzegovina</h6>
                    <p className="universityInfo">As a child, I was good at math, phisycs and drawing, so I decided to apply for Mechanical High School.<br/>
                    Finishing high school 
                    This high school helped me learn math even better, which I can apply in programming today.</p>
                </div>
            </div>
        </div>
    )
}
