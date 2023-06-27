import React, { Component} from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
      name: "",
      surname: "",
      experience: "junior",
      licence: false,
  };

loginInputId = shortid.generate();
nameInputId = shortid.generate();

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
    this.reset();
}

handleLicenseChange = event => {
  console.log(event.currentTarget.checked);
  this.setState({licence: event.currentTarget.checked})
}
reset = () => {
  this.setState({   
    name: "",
    surname: "",
  })
}
render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Name 
          <input 
          id={this.loginInputId}
          name="name"
          type="text" 
          value={this.state.name} 
          onChange={this.handleChange}
          />
        </label> 
        <label htmlFor={this.nameInputId}>
          Surname
          <input 
          id={this.nameInputId}
          name="surname"
          type="text" 
          value={this.state.surname} 
          onChange={this.handleChange}
          />
        </label>

        <p>Your Level</p>

        <label>
          <input 
            type="radio" 
            name="experience" 
            value="junior" 
            onChange={this.handleChange} 
            checked={this.state.experience === "junior"}/> Junior
        </label>
        <label>
          <input 
            type="radio" 
            name="experience" 
            value="middle" 
            onChange={this.handleChange} 
            checked={this.state.experience === "middle"}/> Middle
        </label>
        <label>
            <input 
            type="radio" 
            name="experience" 
            value="senior" 
            onChange={this.handleChange} 
            checked={this.state.experience === "senior"}/> Senior
        </label>
        <br/>
        <label>
          <input 
          type="checkbox" 
          name="licence"
          checked={this.state.licence}
          onChange={this.handleLicenseChange}

          /> Agreed with clauses
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
    )
}
}

export default Form;