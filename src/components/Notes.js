import React, { useContext } from 'react'
import contextValue from '../context/notes/noteContext'
import NoteItem from './Noteitem'
const Notes = () => {

    const context = useContext(contextValue);
    const { notes, setNotes } = context;
    return (
        <div>Notessssssssss
            <div className="row my-3">
                <h2>Your Notes</h2>
                {
                    notes.map((note) => {
                        return <NoteItem note={note} />
                    })
                }
            </div>
        </div>

    )
}

export default Notes