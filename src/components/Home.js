import React, { useContext } from 'react'
import Notes from './Notes'
import AddNote from './AddNote'


export const Home = () => {
    return (
        <div >
            <AddNote />
            <Notes />
        </div>
    )
}