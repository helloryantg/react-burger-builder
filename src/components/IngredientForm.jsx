import React, { Component } from 'react';

class IngredientForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        var newIngredient = {
            name: e.target.name.value,
            color: e.target.color.value
        }
        console.log(newIngredient);
        this.props.handleSubmit(newIngredient);
        e.target.name.value = '';
        e.target.color.value = '';
    }

    render() {
        return (
            <div className="IngredientForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="ingredient"/>
                    <input type="text" name="color" placeholder="color"/>
                    <input type="submit" value="Add Ingredient" />
                </form>
            </div>
        );
    }
}

export default IngredientForm;