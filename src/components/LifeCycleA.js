 import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';


class LifeCycleA extends Component {
    constructor(){
        super()
        this.state={
            Welcome:''
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStatefromprops')
        return null

    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMountA')
        return null
        
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA-update shouldComponentUpdate')
return true
    }
   getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleA-update getSnapshotBeforeUpdate')
return null
    }
    componentDidUpdate(){
        console.log('LifeCycleA-update componentDidUpdate')
    }
    changeHandler = () =>{
        this.setState({
        message1: 'new'}
        )
    }

    render() {
        console.log('LifeCycleA render')

        return (
            <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeHandler}>Click here</button>
           <LifeCycleB /> 
            </div>
        )
    }
}

export default LifeCycleA
