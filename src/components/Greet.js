import React from 'react'

const Greet = props => {
    const {name,heroname} = props
    
    return (
        <div>
        <h1> Hello {name} nick/friend name {heroname}</h1>
{props.children}
</div>
    )

}


export default Greet