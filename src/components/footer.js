import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <h1>Copyright tally 2018</h1>
            </div>
        )
    }
}
export default Footer;