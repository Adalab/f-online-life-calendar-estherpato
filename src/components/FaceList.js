import React, { Component } from 'react';
//import '../stylesheets/Home.css';

class FaceList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.log.map((item, i) => {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default FaceList;