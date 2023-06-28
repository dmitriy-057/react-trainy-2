import React, {Component} from "react";

class ToDoEditor extends Component {
    state = {
        message: "",
    }

handleChange = event => {
    this.setState({message: event.currentTarget.value})
};

handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
};

render() {
    return (
    <form className="ToDoEditor" onSubmit={this.handleSubmit}>
        <textarea 
        value={this.state.message}
        onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="ToDoEditor__button">
            Save
        </button>
    </form>
    )
    }
}

export default ToDoEditor;