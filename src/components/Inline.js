import React from 'react'

const comp = {
    color : 'red',
    fontSize : '72px'
}
function Inline() {
    
    return (
        <div>
      <h1 className= 'error'> AppStyle-in yellow</h1>
            <h1 style={comp}>Inline</h1>

            
        </div>
    )
}

export default Inline
