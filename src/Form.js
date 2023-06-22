import React, { Component} from "react";

class Form extends Component {
state = {
    name: "",
    surname: "",   
}
handleChange = event => {
    console.log('currentTarget name', event.currentTarget.name);
    console.log('currentTarget value', event.currentTarget.value);
    const {name, value} = event.currentTarget;

    this.setState({
      [name]: value,
    })
}

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
}

render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name 
          <input 
          name="name"
          type="text" 
          value={this.state.name} 
          onChange={this.handleChange}/>
        </label> 
        <label>
          Surname
          <input 
          name="surname"
          type="text" 
          value={this.state.surname} 
          onChange={this.handleChange}/>
        </label>
        <button type="submit">Submit</button>
    </form>         
    )
}
}

export default Form;