import React, { Component } from 'react';

class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(this.props.ingredient);
    }

    render() {
        return (
            <div className="components Ingredients" style={{backgroundColor: this.props.ingredient.color}} >
                <p>{this.props.ingredient.name}</p><button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}

export default Ingredient;