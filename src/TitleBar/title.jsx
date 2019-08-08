import React from 'react';
import './title.css';

const titleImageStyle = {
    height: '50%',
    width: '50%'
}

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 font-family="candyinc">Hi, this is</h1>

                <img style = {titleImageStyle} src={require('./prashanth.png')} alt="title" className="author-name" />
            </div>
        )
    }
}

