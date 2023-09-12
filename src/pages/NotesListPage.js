import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

function NotesListPage() {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()

    }, [])
     
    let getNotes = async () => {
        let response = await fetch ('http://127.0.0.1:8000/notes/')
        let data = await response.json()
        console.log('DATA:', data)
        setNotes(data)
    }

  return (
    <div>
        <div className ="notes_list">
            {notes.map((note, index) => (
                <ListItem key={index} note={note} />
            ))}

        </div>
    </div>
  )

}

export default NotesListPage
