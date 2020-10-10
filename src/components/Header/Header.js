import React from 'react';

import classes from './Header.module.css';
import Logo from '../UI/Logo/Logo';
import Search from '../Search/Search';

const header = () => (
    <header className={classes.Header}>
        <div className={classes.HeaderContent}>
            <Logo />
            <Search />
        </div>
        <nav className={classes.Navigation}>
            <div className={classes.HeaderCategories}>
                <ul className={classes.CategoriesNavigation}>
                    <li>
                        <a href='/'>Sale</a>
                    </li>
                    <li>
                        <a href='/'>Living</a>
                    </li>
                    <li>
                        <a href='/'>Bedroom</a>
                    </li>
                    <li>
                        <a href='/'>Dining</a>
                    </li>
                    <li>
                        <a href='/'>Storage</a>
                    </li>
                    <li>
                        <a href='/'>Study</a>
                    </li>
                    <li>
                        <a href='/'>Mattresses</a>
                    </li>
                    <li>
                        <a href='/'>Decor</a>
                    </li>
                    <li>
                        <a href='/'>New</a>
                    </li>
                    <li>
                        <a href='/'>Collections</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default header;