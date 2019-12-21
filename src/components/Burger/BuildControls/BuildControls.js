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
    { label: 'Tomato', type: 'Tomato' }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctr => (
            <BuildControl key={ctr.label} label={ctr.label}/>
        ))}
    </div>
);

export default buildControls;