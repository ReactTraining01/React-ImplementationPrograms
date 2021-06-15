import React, { Component } from 'react'

 class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    Increment (){
        this.setState(prevState => (
            {
                count: prevState.count + 1
            }
        )
        , () => console.log('Call back function', this.state.count))
    }
    Incrementfive (){
        this.Increment ()
        this.Increment ()
        this.Increment ()
        this.Increment ()
        this.Increment ()

    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.Increment()}>Increment</button>
               <button onClick = {() => this.Incrementfive()}>Incrementfive</button> 

                
            </div>
        )
    }
}

export default Counter
