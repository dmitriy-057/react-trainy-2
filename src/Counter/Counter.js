import React from "react";
import './Counter.css';

class Counter extends React.Component {
// свойство экземляра
    state = {
        value: 0,
    }
    // Это то же самое что и через конструктор
    // constructor() {
    //     super();

    //     this.state = {
    //         value: 0
    //     }
    // }
// обьявление публичного свойства;
    handleIncrement = ()=>  {
        console.log('Кликнули в увеличить');
        this.setState(prevState => {
            return {
            value: prevState.value + 1
            }
       })
    }
    handleDecrement = ()=> {
        console.log('Кликнули в уменьшить');
        this.setState(prevState => {
            return {
                value: prevState.value - 1
            }
        })
    }

    render() {
    return (
    <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
            <button type="button" onClick={this.handleIncrement}>
                Увеличить на 1</button>
            <button type="button" onClick={this.handleDecrement}>
                Уменишить на 1</button>
        </div>
    </div>
    )
    }
}

export default Counter;