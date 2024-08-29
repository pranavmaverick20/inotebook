import React, { useContext } from 'react'
import contextValue from '../context/notes/noteContext'
import NoteItem from './Noteitem'
const Notes = () => {

    const context = useContext(contextValue);
    const { notes, addNote } = context;
    return (
        <div>Notessssssssss
            <div className="my-3 mx-2">
                <h2>Your Notes</h2>
                <div className="d-flex flex-wrap">
                    {
                        notes.map((note) => {

                            return (
                                <NoteItem key={note._id} note={note} />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Notes