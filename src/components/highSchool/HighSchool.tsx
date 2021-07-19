import React, { ReactElement } from 'react';
import './HighSchool.css';
import {IState as Props} from '../timeline/Timeline';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
}

export const HighSchool: React.FC<IProps> = ({page, setPage}) => {

    const handleClick = ():void => {
        setPage('home');
    }
    return (
        <div className="highSchool">
            <div className="hightSchoolTop">
                <h1 className="highSchoolTitle">HighSchool</h1>
                <button className="back" onClick={handleClick}>BACK</button>
            </div>
            <div className="highSchoolBottom">
                <div><h4 className="schoolTitle">Mechanical Hight School</h4>
                    <h6 className="schoolTitle">Mixed Hight School, Banovići, Bosnia and Herzegovina</h6>
                    <p className="schoolInfo">As a child, I was good at math, phisycs and drawing, so I decided to finish Mechanical Hight School.</p>
                </div>
            </div>
        </div>
    )
}
