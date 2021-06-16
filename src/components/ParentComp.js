import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'
import MemoComp from './MemoComp'


class ParentComp extends Component {
    constructor(){
        super()
        this.state={
            name : 'veerash'
        }
    }

    componentDidMount (){
        setInterval(()=> 
        this.setState({
            name :'veerash'
        }),2000 )
    }
    render() {
        console.log("****************ParentComponent**********************")
        return (
            <div>
                <div>ParentComponent</div>
                <MemoComp name = {this.state.name}/>
                {/* <RegularComponent name = {this.state.name}/>
                <PureComp name = {this.state.name}/> */}

                
            </div>
        )
    }
}

export default ParentComp
