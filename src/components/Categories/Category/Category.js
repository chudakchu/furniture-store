import React from 'react';

import classes from './Category.module.css';

const category = (props) => (
    <div className={classes.Category}>
        <a href='/' alt=''>
            {props.svg}
            <h4>{props.children}</h4>
        </a>
    </div>
);

export default category;