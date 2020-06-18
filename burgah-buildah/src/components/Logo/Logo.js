import React from 'react'

import burgerLogo from '../../assets/images/BurgahBuildah_logo.png';
import classes from './Logo.css';

export default function Logo(props) {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={burgerLogo} alt="BurgahBuildah" />
        </div>
    )
}
