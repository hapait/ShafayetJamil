import React, { Component} from 'react';
import '../Commons/Styles.css';
import Test from '../Commons/Test';

export default class Footer extends Component {
    
    render() {
        
        return (
            <div id='footerDiv'>
                <text id='footertext'>abdc</text>
                <text style={sty.texcol}>jkkkkkkkkkkkkkkkkkkkkkkkkkk</text>
            </div>
        )
    }
}
const sty = {
    texcol:{
        color:'blue'
    }
};