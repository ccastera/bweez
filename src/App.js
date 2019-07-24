import React from 'react';
import Capture from './webcam/Capture';
import Picture from './display/Picture';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isHomePage: true,
      qrcodeDatas: null
    }
  }

  goToPicture = (qrcodeDatas) => {
    this.setState({
      isHomePage: false,
      qrcodeDatas: qrcodeDatas
    });
  };

  render () {
    let content = this.state.isHomePage ? <Capture goToPicture={this.goToPicture} /> : <Picture qrcodeDatas={this.state.qrcodeDatas} />;
    return content;
  }

}

export default App;
