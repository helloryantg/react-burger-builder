import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

const BurgerPane = (props) => {
    return (
        <div className="components BurgerPane">
            <BurgerStack burgerIngredients={props.burgerIngredients}/>
            <ClearBurger clearStack={props.clearStack}/>
        </div>
    );
}

export default BurgerPane;