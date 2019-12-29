import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDraw: false
    };

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDraw: !prevState.showSideDraw };
        });    
    };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDraw: false })
    };

    render() {
        return (
            <Aux>
                <Toolbar menu={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux >)
    };
};

export default Layout;