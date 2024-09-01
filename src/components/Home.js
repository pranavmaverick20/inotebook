import React, { useContext } from 'react'
import Notes from './Notes'
import AddNote from './AddNote'


export const Home = (props) => {
    return (
        <div >
            <AddNote showAlert={props.showAlert} />
            <Notes showAlert={props.showAlert} />
        </div>
    )
}