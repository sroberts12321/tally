import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../App.css'

class Header extends Component {
    render(){
        return(
            <div className="header">
                <ul>
                    <li><Link to="/">Ping Pong</Link></li>
                    <li><Link to="/darts">Darts</Link></li>
                    <li><Link to="/shuffleboard">Shuffleboard</Link></li>
                    <li><Link to="/tournament">Tournament</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header;