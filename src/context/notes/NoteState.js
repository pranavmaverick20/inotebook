import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = 'http://localhost:5001';
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')

            }
        })
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }


    //add note
    const addNote = async (title, description, tag) => {
        //TO DO API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    }
    //delete notes
    const deleteNote = async (id) => {
        console.log("Deleting an node with id" + id);
        const newNotes = notes.filter((note) => note._id != id);
        setNotes(newNotes);
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DElETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json);

    }
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        let newNotes = JSON.parse(JSON.stringify(notes));

        for (let i = 0; i < newNotes.length; i++) {
            let element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);

    }

    //edit a note

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState