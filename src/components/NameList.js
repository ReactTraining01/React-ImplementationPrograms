import React from 'react'
import Person from './Person'

function NameList(){
// const persons = [
//     {
//         ID : '0',
//         Name : 'Bruce',
//         Age : '25',
//         Skill : 'JAVA'
//     },
//     {
//         ID : '1',
//         Name : 'Clark',
//         Age : '26',
//         Skill : 'JS'

//     },
//     {
//         ID : '2',
//         Name : 'Diana',
//         Age : '24',
//         Skill : 'React'

//     }

// ]
// const PersonList = persons.map(person => <Person person = {person}/>) 
// return(
//     <div>
//     {PersonList}
//     </div>
// )

const name = ['Bruce','Diana','Clark','Clark']
const personlist = name.map((person,index)=><h2 key = {index}>{index}{person}</h2>)
return(
    <div>
        {
personlist
        }
    </div>
)
}
export default NameList