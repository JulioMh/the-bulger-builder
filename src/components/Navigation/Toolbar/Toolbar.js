import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle click={props.menu} />
        <Logo />
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header >
);

export default toolbar;