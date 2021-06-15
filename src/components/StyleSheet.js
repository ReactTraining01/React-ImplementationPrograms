import React from 'react'
import './myStyles.css'


function StyleSheet(props) {
    const name = props.isprimary ? 'primary' :''
    return (
        <div>
            <h1 className = {name}> StyleSheet </h1>
        </div>
    )
}

export default StyleSheet
