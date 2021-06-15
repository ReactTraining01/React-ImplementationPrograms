import React,{Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    constructor(props){
    super(props)

    this.state  = {
Message : 'BruceWayne'
    }
    this.greetinghandler= this.greetinghandler.bind(this)
    }
     

    greetinghandler(child){
        alert('Hello'+ this.state.Message + 'this is passed from child class'+child)
    }
    render(){
        return(
            <div>
            <ChildComponent GreetHandler ={this.greetinghandler}/>   
            </div>)
    }
}
export default ParentComponent