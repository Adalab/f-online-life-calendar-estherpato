import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaceList from './FaceList.js';
import '../stylesheets/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/edition" className="add-button">+</Link>
                <FaceList 
                log={this.props.log}
                status={this.props.status}
                />
            </div>
        );
    }
}

export default Home;