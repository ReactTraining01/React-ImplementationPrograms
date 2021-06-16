import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComp extends PureComponent {
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
                <RegularComponent name = {this.state.name}/>
                <PureComp name = {this.state.name}/>

                
            </div>
        )
    }
}

export default ParentComp
