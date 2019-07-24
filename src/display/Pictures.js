import React from 'react';
import Request from '../services/Request';

class Pictures extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            displayPicture: 'none',
            picture: '',
            pictures: []
        };
    }
    
    componentWillMount() {
        this.loadQRCodes();
    }
    
    loadQRCodes = () => {
        const self = this;
        Request.get(
            '/images',
            (response) => {
                self.setState({
                    pictures: response.data
                });
            },
            (error) => {}
        );
    }

    showPicture = (picture_url) => {
        this.setState({
            displayPicture: 'block',
            picture: picture_url
        });
    };

    render () {
        return (
            <div>
                <div>
                    <span><h1>Cliquez sur un QR Code pour voir la photo associée</h1></span>
                    {this.state.pictures.map((picture) => {
                        return <span key={picture.id}><img src={picture.qrcode} onClick={() => this.showPicture(picture.picture_url)} alt="" /> &nbsp;&nbsp;&nbsp;</span>
                    })}
                </div>

                <img src={this.state.picture} style={{display: this.state.displayPicture}} alt="" />
            </div>
        );
    }
}

export default Pictures;
