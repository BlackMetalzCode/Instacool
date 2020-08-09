import React, { Component, CSSProperties } from 'react';

import Button from '../../components/Button'
import ProfileImg from '../../components/ProfileImg'
import Card from '../../components/Card'
const style ={
  container : {
    padding: '15px',
  },
  row: {
    padding: '15px',
    display:'flex',
    justifyContent: 'space-between',
    marginBottom:'10px'
  },
}


class Profile extends Component {
  render() {
    return (
    <div style={style.container}>
      <div style={style.row}>
        <ProfileImg/>
        <Button>Agregar</Button>
      </div>
      <div style={style.row}>
        <Card><img src='http://placekitten.com/150/150'/></Card>
        <Card><img src='http://placekitten.com/150/150'/></Card>
        <Card><img src='http://placekitten.com/150/150'/></Card>
      </div>
      <div style={style.row}>
        <Card><img src='http://placekitten.com/150/150'/></Card>
        <Card><img src='http://placekitten.com/150/150'/></Card>
        <Card><img src='http://placekitten.com/150/150'/></Card>
      </div>      
    </div>
    );
  }
}

export default Profile;