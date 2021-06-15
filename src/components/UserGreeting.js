import Return,{Component} from 'react'
class UserGreetings extends Component{

constructor(props){
    super()
    this.state ={
        isLoggedin : true
    }


}
render(){
        

    return this.state.isLoggedin && <div>Welcome Bruce</div>
}

// render(){


//     return this.state.isLoggedin ?
//     (<div>Welcome Bruce Wayne</div> ) : (<div>Welcome User</div>)
// }

// render(){
// let Message
// if(this.state.isLoggedin){
// Message= <div>Welcome Bruce Wayne</div>
// }
// else{
//     Message=  <div>Welcome User</div>
//     }

//     return <div>{Message}</div>
// }

// render(){
// if(this.state.isLoggedin){
// return<div>Welcome Bruce Wayne</div>
// }
// else{
//     return<div>Welcome User</div>
//     }
// }


}
export default UserGreetings