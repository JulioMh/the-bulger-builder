import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'

const burger = (props) => {

    let transformedIngredientes = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredientes.length === 0)
        transformedIngredientes = <p>Please start adding ingredients</p>;
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredientes}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;