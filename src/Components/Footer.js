import React, { Component} from 'react';
import propic from '../Assets/30_Shafayet_Jamil.jpg';
import '../Commons/Styles.css';

export default class Footer extends Component {

    render() {
        const bkgnd_img_url = require('../Assets/back.jpg');
        const backgroundStyle = {
            backgroundImage: `url(${bkgnd_img_url})`,
            backgroundSize: 'cover',
        };
        return (
            <div style={backgroundStyle}>
                <view id='body'>
                    <text id='profileName'>Md. Shafayet Jamil</text>
                </view>
            </div>
        )
    }
}