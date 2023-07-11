import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  }

  setActiveIndex = index => {
    this.setState({activeOptionIdx: index})
  }
  
  makeOptionClassName = index => {
    const optionClasses = ["ColorPicker__option"];
    if(index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  }
    render() {
      const {options} = this.props;
      const {activeOptionIdx} = this.state;
      const {label} = options[activeOptionIdx];
      console.log(label);
        return (
            <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            <p>Выбран цвет: {label}</p>
            <div>
              {options.map(({ label, color }, index) => (
                  <button
                    key={label}
                    className={this.makeOptionClassName(index)}
                    style={{ backgroundColor: color,}}
                    onClick={()=> this.setActiveIndex(index)}
                  ></button>
                ))}
            </div>
          </div>
        )
    }
}


export default ColorPicker;