import React from 'react';

import classes from './Footer.module.css';
import Facebook from '../../components/UI/SVG/Contacts/Facebook';
import Instagram from '../../components/UI/SVG/Contacts/Instagram';
import Linkedin from '../../components/UI/SVG/Contacts/Linkedin';
import Twitter from '../../components/UI/SVG/Contacts/Twitter';

const footer = () => (
    <footer className={classes.Footer}>

        <div className={classes.Subscribe}>
            <div className={classes.SubscribeTitle}>Sign up and get a chance to win the giveaway of the week.</div>
            <div className={classes.SubscribeBlock}>
                <div>
                    <form className={classes.SubsrcibeForm}>
                        <input placeholder='Your email address' />
                        <button>Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
        <div className={classes.FooterContent}>
            <div className={classes.Row}>
                <div>
                    <h2 className={classes.FooterTitle}>The Company</h2>
                    <div className={classes.InfoBody}>
                        <ul className={classes.ContentList}>
                            <li><a href='/'>About us</a></li>
                            <li><a href='/'>Help</a></li>
                            <li><a href='/'>Blog</a></li>
                            <li><a href='/'>Inside UL</a></li>
                        </ul>
                        <ul className={classes.ContentList}>
                            <li><a href='/'>Careers</a></li>
                            <li><a href='/'>Press</a></li>
                            <li><a href='/'>Team</a></li>
                            <li><a href='/'>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className={classes.FooterTitle}>More Information</h2>
                    <div className={classes.InfoBody}>
                        <ul className={classes.ContentList}>
                            <li><a href='/'>Payment and Security</a></li>
                            <li><a href='/'>Shipping and Delivery</a></li>
                            <li><a href='/'>Terms of Use</a></li>
                            <li><a href='/'>Terms of Offer + Sale</a></li>
                        </ul>
                        <ul className={classes.ContentList}>
                            <li><a href='/'>Contact us</a></li>
                            <li><a href='/'>Visit Us</a></li>
                            <li><a href='/'>Buy in Bulk</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className={classes.FooterTitle}>Explore More</h2>
                    <div className={classes.InfoBody}>
                        <ul className={classes.ContentList}>
                            <li><a href='/'>Refer and Earn</a></li>
                            <li><a href='/'>Exchange</a></li>
                            <li><a href='/'>Gift Cards</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className={classes.FooterTitle}>Registered Address</h2>
                    <div className={classes.InfoBody}>
                        <ul className={classes.ContentList}>
                            <li>
                                Urban Ladder Home Décor Solutions,
                                <br />
                                1st Floor No 259,
                                <br />
                                Ivano-Frankivsk, Ukraine
                                </li>
                            <li><b>CIN:</b> UA1234567890ABC18</li>
                            <li><b>Grievance Contact:</b>
                                <br />
                            Dana Chuchuk
                            <br />
                            danachuchuk0@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.Row}>
                <h2 className={classes.FooterTitle}>Connect With Us</h2>
                <div className={classes.Contacts}>
                    <Facebook />
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                </div>
            </div>
            <div className={classes.Row}>
                <p>&#169; 2020 Copyright by Dana Chuchuk</p>
            </div>
        </div>

    </footer>
);

export default footer;