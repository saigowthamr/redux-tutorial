import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addname, error, changeName } from './actions/actionCreators'
import './App.css'

class App extends Component {


  handleNameChange = (e) => {
    this.props.onChangeName(e.target.value)
  }

  handleClick = () => {

    if (this.props.name) {
      this.props.onAddName()
    } else {
      this.props.onError("Name field cannot be empty")
    }

  }

  render() {
    return (
      <div className="App">

        <div>
          <input type="text"
            placeholder="Name"
            value={this.props.name} onChange={this.handleNameChange} />
          <button onClick={this.handleClick}>Add name</button>

          <p className={this.props.error ? "error active" : "error"}>{this.props.error}</p>
          <ul>
            {this.props.allNames && this.props.allNames.map(name => (
              <li key={name}> {name}</li>
            ))}
          </ul></div>

      </div>
    );
  }
}


const mapStatetoProps = (state) => {
  return {
    name: state.name,
    error: state.error,
    allNames: state.allNames
  }
}


const mapDispatchtoProps = (dispatch) => {
  return {
    onChangeName: (name) => dispatch(changeName(name)),
    onAddName: () => dispatch(addname()),
    onError: (err) => dispatch(error(err))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
