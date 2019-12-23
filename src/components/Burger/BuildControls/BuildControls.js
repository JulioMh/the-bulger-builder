import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'lettuce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Pickle', type: 'pickle' },
    { label: 'Onion', type: 'onion' },
    { label: 'Tomato', type: 'tomato' }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <b>{props.totalPrice}</b></p>
        {controls.map(ctr => (
            <BuildControl
                key={ctr.label}
                label={ctr.label}
                added={() => props.ingredientAdded(ctr.type)}
                removed={() => props.ingredientRemoved(ctr.type)}
                disable={props.disableInfo[ctr.type]}
            />
        ))}
        <button
            className={styles.OrderButton}
            onClick={props.ordered}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;