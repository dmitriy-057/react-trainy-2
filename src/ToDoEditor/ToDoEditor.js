import React, {Component} from "react";

class ToDoEditor extends Component {
    state = {
        message: "",
    }

handleChange = event => {
    
}    
render() {
    return (
    <form className="ToDoEditor">
        <textarea 
        value={this.state.message}
        onChange={this.handleChange}
        ></textarea>
        <button type="button" className="ToDoEditor__button">
            Save
        </button>
    </form>
    )
    }
}

export default ToDoEditor;