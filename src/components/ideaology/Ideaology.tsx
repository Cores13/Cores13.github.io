import React from 'react';
import './Ideaology.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const Ideaology: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }
    
    return (
        <div className="ideaology">
            <div className="ideaologyTop">
                <h1 className="ideaologyTitle">Ideaology</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="ideaologyBottom">
                <div><h4 className="ideaologyTitle">Mechanical Hight ideaology</h4>
                    <h6 className="ideaologyTitle">Mixed Hight ideaology, Banovići, Bosnia and Herzegovina</h6>
                    <p className="ideaologyInfo">As a child, I was good at math, phisycs and drawing, so I decided to apply for Mechanical High School.<br/>
                    Finishing high school 
                    This high school helped me learn math even better, which I can apply in programming today.</p>
                </div>
            </div>
        </div>
    )
}
