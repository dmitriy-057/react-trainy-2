import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import './Counter.css';

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    }
    // static propTypes = {
    //     initialValue: PropTypes.number,
    // }

// свойство экземляра
    state = {
        value: this.props.initialValue,
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
        // использую стрелочную ф-цию с параметром "prevState" что бы перезаписать старое значение
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    }
    handleDecrement = ()=> {
        console.log('Кликнули в уменьшить');
        this.setState(prevState => ({ 
            value: prevState.value - 1 
        }))
    }

    render() {
    return (
    <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Value onValue={this.state.value}/>
        <Controls 
        onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
    </div>
    )
    }
}

export default Counter;