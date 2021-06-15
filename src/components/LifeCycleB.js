import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(){
        super()
        this.state={
            Welcome:''
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStatefromprops')
        return null

    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMountB')
        return null
        
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB-update shouldComponentUpdate')
return true
    }
   getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleB-update getSnapshotBeforeUpdate')
return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB-update componentDidUpdate')
    }
    render() {
        console.log('LifeCycleB render')

        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB
