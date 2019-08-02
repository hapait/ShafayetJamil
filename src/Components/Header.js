import React, { Component, view} from 'react';
import { Stylesheet } from 'react';
import logo from '../logo.svg';
import propic from '../Assets/30_Shafayet_Jamil.jpg';
import '../Commons/Styles.css';

export default class Header extends Component {

    render() {
        const bkgnd_img_url = require('../Assets/back.jpg');
        const backgroundStyle = {
            backgroundImage: `url(${bkgnd_img_url})`,
            backgroundSize: 'cover',
        };
        return (
            <div style={backgroundStyle}>
                <view id='body'>
                    <img src={propic} style={{ height: 100, width: 100 }} />
                    <text id='profileName'>Md. Shafayet Jamil</text>
                </view>
            </div>
        )
    }
}