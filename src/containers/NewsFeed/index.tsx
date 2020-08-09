import React, { Component } from 'react';

import Post from '../../components/Post'
import Container from '../../components/Container'

class NewsFeed extends Component {
    render() {
        return (
            <Container center={false}>
                <div style={{margin: '0 auto'}}><Post image={'http://placekitten.com/300/200'}/></div>
                <div style={{margin: '0 auto'}}><Post image={'http://placekitten.com/300/200'}/></div> 
 
            </Container>
        );
    }
}

export default NewsFeed;