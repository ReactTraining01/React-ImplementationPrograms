 import React from 'react'

function Person({person}) {
    return (
        <div>
            {
<h1>This is  {person.Name} age is {person.Age} my skill is {person.Skill}</h1>
            }
            
        </div>
    )
}
export default Person
