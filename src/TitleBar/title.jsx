import React from 'react';
import './title.css';
import Button from 'react-bootstrap/Button';

const titleImageStyle = {
    height: '50%',
    width: '50%'
}

const titleButtonStyle = {
    maxWidth: 100, margin:'0 auto 10px'
}

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <p fontFamily="candyinc">Hi, this is</p>
                <img style = {titleImageStyle} src={require('./prashanth.png')} alt="title" className="author-name" />
                <Button style = {titleButtonStyle} block>Click Here !!!</Button>
            </div>
        )
    }
}

