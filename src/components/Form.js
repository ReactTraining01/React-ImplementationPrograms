import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state ={
            message : '',
            text : '',
            select: 'react'
        }
    }
     textHandler = event =>{
        this.setState(
            {
                message: event.target.value
            }
        )
    }
    textareaHandler = event =>{
        this.setState(
            {
                text: event.target.value
            }
        )
    }

    selectHandler = event =>{
        this.setState(
            {
                select: event.target.value
            }
        )
    }
    submitHandler = event =>{
        alert(`${this.state.message}${this.state.text}${this.state.select}`)
        event.preventDefault()
    }

    render() {
        return (
            <form>
            <div>
                <label>Username</label>
                <input type= "text" value= {this.state.message}
                onChange= {this.textHandler}/>
                
            </div>
            <div>
                <label>Text</label>
                <textarea value= {this.state.text}
                onChange= {this.textareaHandler}/>
                
            </div>
            <div>
            <select value={this.state.select} onChange={this.selectHandler}>
               <option value ="react">React</option>
               <option value ="Java">Java</option>
               <option value =".net">.net</option>
               
            </select>
            </div>
            <div>
            <button onClick={this.submitHandler}>
                submit
            </button>
            </div>

            </form>
        )
    }
}
export default Form
