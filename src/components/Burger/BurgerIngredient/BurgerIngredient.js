import React from 'react'
import styles from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case ('onion'):
                ingredient = <div className={styles.Onion}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon}></div>
                break;
            case ('lettuce'):
                ingredient = <div className={styles.Lettuce}></div>
                break;
            case ('tomato'):
                ingredient = <div className={styles.Tomato}></div>
                break;
            case ('pickle'):
                ingredient = <div className={styles.Pickle}></div>
                break;
            case ('pickle1'):
                ingredient = <div className={styles.Pickle1}></div>
                break;
            case ('pickle2'):
                ingredient = <div className={styles.Pickle2}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes= {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;