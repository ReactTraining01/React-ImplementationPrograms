import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(){
        super()
        //this.inputRef =  React.createRef()
        this.cbRef = null
        this.setcbRef = element => {
            this.cbRef = element
        }

    }
    componentDidMount(){
        // this.inputRef.current.focus()
        this.cbRef.focus()

    }
    ClickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type ="text"  ref ={this.setcbRef} />
                {/* <input type ="text"  ref ={this.inputRef} />
                <button onClick = {this.ClickHandler}>ClickHere</button> */}
                
            </div>
        )
    }
}

export default RefsDemo
