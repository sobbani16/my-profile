import React from 'react';
import './title.css';
import * as Button from '../../node_modules'

const titleImageStyle = {
    height: '50%',
    width: '50%'
}

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <p font-family="candyinc">Hi, this is</p>
                <Button bsStyle="primary" bsSize="large" block>Hello New Button</Button>

                <img style = {titleImageStyle} src={require('./prashanth.png')} alt="title" className="author-name" />
            </div>
        )
    }
}

