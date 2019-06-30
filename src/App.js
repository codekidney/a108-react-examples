import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Paragraph from './Paragraph';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paragraphText: 'Sample value',
    }
  }

  setParagraphText = (e) => {
    this.setState({
      paragraphText: e.target.value
    })
  }

  render = () => {
    return (
      <div className="App">
        <Header size="1" title="React Exmples" />
        <Paragraph text={this.state.paragraphText}/>
        <Input callbackSetTitle={ this.setParagraphText } />
      </div>
    );
  }
}

export default App;
