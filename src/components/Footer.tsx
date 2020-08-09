import React, { Component, CSSProperties } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const style = {
    footer: {
        backgroundColor: '#eee',
        display:'flex',
        marginBottom: '-10px',
        marginLeft: '-15px',
        width: 'calc(100% + 30px)',
     },
    button:{
        cursor: 'pointer',
        flex:1,
        padding: '10px 15px',
        textAlign: 'center',
     }
}

class Footer extends Component {
    render() {
        return (
        <div style={style.footer}>
            <div style={style.button as CSSProperties}><FontAwesomeIcon icon={faThumbsUp}/> Like</div>
            <div style={style.button as CSSProperties}><FontAwesomeIcon icon={faRetweet}/> Compartir</div>
        </div>
        );
    }
}

export default Footer;