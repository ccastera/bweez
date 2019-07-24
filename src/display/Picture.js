import React from 'react';
import Request from '../services/Request';

class Picture extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            qrcode: props.qrcodeDatas,
            displayPicture: 'none',
            picture: ''
        };
    }

    showPicture = () => {
        if (!this.state.picture) {
            const self = this;
            Request.post(
                '/images/qrcode',
                { qrcode: this.state.qrcode },
                (response) => {
                    self.setState({
                        displayPicture: 'block',
                        picture: response.data
                    });
                },
                (error) => {}
            );
        }
    };

    render () {
        return (
            <div>
                <div>
                    <span><h1>Voici le QR Code de votre dernière photo</h1></span>
                </div>

                <img src={this.state.qrcode} alt="qr code" onClick={this.showPicture} />

                <p>
                    <span>Cliquez sur le QR Code pour voir affiché l'image correspondante</span>
                </p>

                <img src={this.state.picture} style={{display: this.state.displayPicture}} alt="" />
            </div>
        );
    }
}

export default Picture;
