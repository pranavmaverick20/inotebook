import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61322f19553781a8a8d006",
            "user": "6131d534037d4734a066",
            "title": "My Title 1",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.5092",
            "__v": "0"
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 3",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 4",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 5",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 6",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {

            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131d53e4037cd4734a066",
            "title": "My Title 7",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState