import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = (id)=>{
    fetch("http://localhost:8000/notes/"+id,{
      method:'DELETE'
    })
    const newNotes = notes.filter(note=>note.id !== id)
    setNotes(newNotes)

  }
  return (
    <Container>
      <Grid container spacing = {3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} lg={4}>
            <NoteCard notes={note} handleDelete  = {handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
