import React from 'react';
import { Button } from './Button';
import './App.css';

class App extends React.Component {
  state = {
    count: [],
    keys: [
      { value: "clear", styleName: "clearButton" },
      { value: "/", styleName: "operatorButton" },
      { value: "7", styleName: "numberButton" },
      { value: "8", styleName: "numberButton" },
      { value: "9", styleName: "numberButton" },
      { value: "*", styleName: "operatorButton" },
      { value: "4", styleName: "numberButton" },
      { value: "5", styleName: "numberButton" },
      { value: "6", styleName: "numberButton" },
      { value: "-", styleName: "operatorButton" },
      { value: "1", styleName: "numberButton" },
      { value: "2", styleName: "numberButton" },
      { value: "3", styleName: "numberButton" },
      { value: "+", styleName: "operatorButton" },
      { value: "0", styleName: "numberButton" },
      { value: "=", styleName: "operatorButton" },


    ]
  }
// handler is a method which changes the state above
  handleButton = (value) => {
    if (value === "clear") {
      this.setState({ count: [] })
    } else if (value === "=") {
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
    } else {
      this.setState(prevState => ({
        count: [...prevState.count, value]
      }))
    }
  }

  render() {
    return (
      <div>
      <div className="calc-body">
        <div className="value-row">
          <h1 className="value-box" placeholder="0"> {this.state.count} </h1>
        </div>
        <div className="buttonsWrapper">
          <div className="buttons">
            {this.state.keys.map(key => {
              return <Button handleButton={this.handleButton} data={key} />
            })}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
