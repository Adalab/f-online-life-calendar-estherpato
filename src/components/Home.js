import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaceList from './FaceList.js';
import '../stylesheets/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/edition">+</Link>
                <FaceList 
                log={this.props.log}
                />
            </div>
        );
    }
}

export default Home;