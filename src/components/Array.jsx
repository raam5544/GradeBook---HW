import React from 'react'
import "../App.css"

function Array(props) {
    return (
        props.value.map((key) => {
            return (
                <div id='viewer'>
                    <h4>Name: {key.name}</h4>
                    <h4>Marks: {key.marks}</h4>
                </div>
            )
        })
    )
}

export default Array