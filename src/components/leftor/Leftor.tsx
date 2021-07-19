import React from 'react';
import './Leftor.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
}

export const Leftor: React.FC<IProps> = ({page, setPage}) => {

    const handleClick = ():void => {
        setPage('home');
    }
    return (
        <div className="Leftor">
            <div className="hightSchoolTop">
                <h1 className="LeftorTitle">Leftor</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="highSchoolBottom">
                <div><h4 className="schoolTitle">Mechanical Hight School</h4>
                    <h6 className="schoolTitle">Mixed Hight School, Banovići, Bosnia and Herzegovina</h6>
                    <p className="schoolInfo">As a child, I was good at math, phisycs and drawing, so I decided to apply for Mechanical High School.<br/>
                    Finishing high school 
                    This high school helped me learn math even better, which I can apply in programming today.</p>
                </div>
            </div>
        </div>
    )
}
