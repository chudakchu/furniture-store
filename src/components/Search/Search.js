import React from 'react';

import classes from './Search.module.css';
const search = () => (
    <div className={classes.Search}>
        <form className={classes.HeaderSearch}>
            <input type='search' placeholder='Search' />
        </form>
    </div>
);

export default search;