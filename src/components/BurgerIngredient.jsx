import React from 'react';

const BurgerIngredient = (props) => {
    return (
        <div className="components BurgerIngredient" style={{backgroundColor: props.ingredient.color}}>
            <p>{props.ingredient.name}</p>
        </div>
    );
}

export default BurgerIngredient;