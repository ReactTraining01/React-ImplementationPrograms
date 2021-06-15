import React, { Component } from 'react'


class ClassClick extends Component {
    ClickHandler(){
        console.log('ClassButtonClicked')
    }
    render(){
        return(
            <div>
                <button onClick= {this.ClickHandler}>ClickMe</button>
            </div>
        )
         
    }

}
export default ClassClick