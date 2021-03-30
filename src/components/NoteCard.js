import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  test: {
    border: (notes) => {
      if (notes.category === "work") {
        return "1px solid red";
      }
    },
  },
});

export default function NoteCard({ notes, handleDelete }) {
  const classes = useStyles(notes);
  return (
    <div>
      <Card elevation={2} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(notes.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={notes.title}
          subheader={notes.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {notes.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
