import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Story from './components/Story.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
