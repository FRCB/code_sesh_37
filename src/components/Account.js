import React, {Component} from 'react';
import Header from './Header'

export default class Account extends Component {
    render() {
        return (
            <div>
                <Header title='Account Information:'/>
                <p>Username: {this.props.creds.user}</p>
                <p>Password: {this.props.creds.pass}</p>
            </div> 
        )
    }
}