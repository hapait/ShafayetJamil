import React, { Component} from 'react';
import propic from '../Assets/30_Shafayet_Jamil.jpg';
import '../Commons/Styles.css';

export default class Showcase extends Component {

    render() {
        return (
            <div>
                <view id='body'>
                    <img src={propic} style={{ height: 100, width: 100 }} alt='Shafayet Jamil'/>
                    <text id='profileName'>Md. Shafayet Jamil</text>
                </view>
            </div>
        )
    }
}