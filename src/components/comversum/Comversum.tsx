import React from 'react';
import './Comversum.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const Comversum: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }

    return (
        <div className="comversum">
            <div className="comversumTop">
                <h1 className="comversumTitle">Comversum</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="comversumBottom">
                <div><h4 className="comversumTitle">Mechanical Hight School</h4>
                    <h6 className="comversumTitle">Mixed Hight School, Banovići, Bosnia and Herzegovina</h6>
                    <p className="comversumInfo">As a child, I was good at math, phisycs and drawing, so I decided to apply for Mechanical High School.<br/>
                    Finishing high school 
                    This high school helped me learn math even better, which I can apply in programming today.</p>
                </div>
            </div>
        </div>
    )
}
