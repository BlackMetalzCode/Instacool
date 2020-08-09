import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'
const style = {
  link:{
    color:'#555',
    textDecoration:'none',
  },
  navbar:{
    borderBottom:'solid 1px #000',
    padding:'10px 15px',
  },
}
class Navbar extends Component {
  render() {
    return (
      <div style={style.navbar}>
        <Link style={style.link} to='/app/newsfeed'><FontAwesomeIcon icon={faUser}/>Instacool</Link>
        <div style={{float:'right'}}><Link style={style.link} to= '/app/profile'><FontAwesomeIcon icon={faNewspaper}/>Profile</Link></div>
      </div>
    );
  }
}

export default Navbar;