import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Signin from './signin';
require('./style/Sign.css');


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
        <div>
        </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Home />,
    document.getElementById('mount')
  );
});
