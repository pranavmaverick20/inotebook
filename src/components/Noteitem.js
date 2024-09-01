import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props
    return (

        <div className="">
            <div className="card my-2 mx-2">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex">
                            <h5 className="card-title">{note.title}</h5>
                            <i className="far fa-trash-alt mx-2" onClick={() => {
                                deleteNote(note._id);
                                props.showAlert('Deleted note!', 'success');
                            }}></i>
                            <i className="far fa-edit mx-2" onClick={() => updateNote(note)}></i>
                        </div>
                        <p className="card-text">{note.description}</p>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Noteitem