import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/App.css';
import FormCode from './FormCode';



class App extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  };


  render() {
    return (
        <div className="container">
          <h3 className="jumbotron">
              <img className="App-logo" src={logo} alt="logo"/>

              {/**/}Redux Form Validation{/**/}

              <img className="App-logo" src={logo} alt="logo"/>
          </h3>

          <FormCode onSubmit={this.submit} />
        </div>
    );
  }
}

export default App;
