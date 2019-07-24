import React from 'react';
import Webcam from 'react-webcam';
import Request from '../services/Request';

class Capture extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      hasCapturedDatas: 'none',
      capturedDatas: '',
      goToPicture: props.goToPicture
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      hasCapturedDatas: 'block',
      capturedDatas: imageSrc
    });
  };

  savePicture = () => {
    const self = this;
    Request.post(
      '/images', // uri
      { picture: this.state.capturedDatas }, // datas
      (response) => { // success callback
        self.state.goToPicture(response.data);
      },
      (error) => { // error callback
        // 
      }
    );
  };
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          width={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>

        <div style={{ display: this.state.hasCapturedDatas }}>
          <img src={this.state.capturedDatas} alt="alt" />
          <button onClick={this.savePicture}>Sauvegarder</button>
        </div>
      </div>
    );
  }
}

export default Capture;