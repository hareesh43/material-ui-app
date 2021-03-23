import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
