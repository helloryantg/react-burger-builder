import React, { Component } from 'react';

class ClearBurger extends Component {
    constructor(props) {
        super(props);
        this.clearStack = this.clearStack.bind(this);
    }

    clearStack() {
        this.props.clearStack();
    }
    
    render() {
        return (
            <div className="components">
                <button onClick={this.clearStack}>Clear burger</button>
            </div>
        );
    }
}

export default ClearBurger;