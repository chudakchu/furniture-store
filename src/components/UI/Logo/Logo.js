import React from 'react';

import classes from './Logo.module.css';
import Logo from '../SVG/Header/Logo';
import LogoText from '../SVG/Header/LogoText';

const logo = () => (
    <figure className={classes.HeaderLogo}>
        <Logo />
        <LogoText />
    </figure>
);

export default logo;