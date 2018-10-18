import React, { Component } from 'react';
import '../stylesheets/FaceList.css';

class FaceList extends Component {
    render() {
        
        return (
            <div>
                <ul className="faces-container">
                    {this.props.log.map((item, i) => {
                        let faceStatus = item === ':)' ? 'happy-face' : 'sad-face'
                        return (
                            <li 
                            key={i}
                            className={`face ${faceStatus}`}
                            // title={item.date}
                            >
                            {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default FaceList;