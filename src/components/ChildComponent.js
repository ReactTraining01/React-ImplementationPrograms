import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={()=>props.GreetHandler('will you bleed')}>Click here</button>
        </div>
    )
}
export default ChildComponent
