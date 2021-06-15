import React,{Component} from 'react'

class EventBindings extends Component {
  
    constructor(){
        super()
        this.state={
            message : 'Click here to hack your pc'
        }
        // this.ClickHandler =this.ClickHandler.bind(this)
    }
    ClickHandler = () =>{
        this.setState({
            message : 'Prank Panom camera parunga :)'
        })
    }
    render(){
        return(
            <div>
            <div>{this.state.message}</div>
            {/* <button onClick= {this.ClickHandler.bind(this)}> Click</button> */}
            {/* <button onClick= {() => this.ClickHandler()}> Click</button> */}
            <button onClick= {this.ClickHandler}> Click</button>
            </div>

        )
    }
    
}
export default EventBindings