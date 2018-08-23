import React,{Component} from 'react'
import PropTypes from "prop-types";

class Lesson5 extends Component{

    render(){
         return(
             <div>
                 Hello {this.props.firstName} {this.props.lastName}!
             </div>
         )
    }
}

Lesson5.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,

}

export default Lesson5