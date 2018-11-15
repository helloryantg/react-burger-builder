import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredient';

class BurgerStack extends Component {
    render() {
        var mapped = this.props.burgerIngredients.map((ingredient, index) => <BurgerIngredient ingredient={ingredient} key={index} />)
        
        return (
            <div className="components BurgerStack">
                <h3>Burger Stacking Area</h3>
                {mapped}
            </div>
        );
    }
}

export default BurgerStack;