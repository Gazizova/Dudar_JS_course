import React,{Component} from 'react'

class Lesson3 extends Component{

     props = {
        className: 'container',
        children: 'Hello!!!',
    }
    element = (
        <div{...this.props} className='override-class-name'/>
    )
    render(){
         return(
             this.element
             //{/*<div{...this.props}/>*/}  // почему не работает?
         )
    }
}

export default Lesson3