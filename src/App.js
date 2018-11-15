import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    };
    this.addIngredient = this.addIngredient.bind(this);
    this.clearStack = this.clearStack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addIngredient(ingredient) {
    var burgerIngredients = this.state.stack;
    burgerIngredients.push(ingredient);
    this.setState({
      burgerIngredients: burgerIngredients
    });
  }

  clearStack() {
    var stack = this.state.stack;
    stack = [];
    this.setState({
      stack: stack
    });
  }

  handleSubmit(newIngredient) {
    var currIngredients = this.state.ingredients;
    currIngredients.push(newIngredient);
    this.setState({
      currIngredients: currIngredients
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ingredients">
          <IngredientList handleSubmit={this.handleSubmit} handleAdd={this.addIngredient} ingredients={this.state.ingredients} />
        </div>
        <div className="burger-stack">
          <BurgerPane 
            burgerIngredients={this.state.stack}
            clearStack={this.clearStack} 
          />
        </div>
      </div>
    );
  }
}

export default App;
