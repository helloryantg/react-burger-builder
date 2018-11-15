import React, { Component } from 'react';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';

class IngredientList extends Component {
    render() {
        var mapped = this.props.ingredients.map((ingredient, index) => <Ingredient handleAdd={this.props.handleAdd} ingredient={ingredient} key={index} />)
        return (
            <div className="components">
                <h3>Ingredient List</h3>
                <IngredientForm handleSubmit={this.props.handleSubmit}/>
                {mapped}
            </div>
        );
    }
    
}

export default IngredientList;