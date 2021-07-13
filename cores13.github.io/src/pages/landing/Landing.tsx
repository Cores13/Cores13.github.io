import React from 'react'
import './Landing.css'
import { Grid, Cell } from 'react-mdl';

export const Landing: React.FC = () =>{
    return (
        <div className='bg-color' style={{width: '100%', height:'100%'}}>
            <div className='gridWrapper' style={{width: '80%', margin: 'auto'}}>
                <Grid className="projectsGrid">
                    <Cell col={1}>1</Cell>
                    <Cell col={1}>1</Cell>
                    <Cell col={1}>1</Cell>
                </Grid>
            </div>
        </div>
    )
}
