import React from 'react';

import classes from './Safety.module.css';
import SafetyImage from '../../assets/images/Safety.jpg';

const safety = () => (
    <section className={classes.Safety}>
        <div className={classes.Background}></div>
        <div className={classes.Title}>Safety Assured</div>
        <div className={classes.FirstHalf}>
            <img src={SafetyImage} alt=''></img>
        </div>


    </section>
);


export default safety;