import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
   backgroundColor:(notes)=>{
     if(notes.category === 'work'){
       return yellow[700]
     }
     if(notes.category === 'reminders'){
      return green[500]
    }
    if(notes.category === 'todos'){
      return red[400]
    }
    if(notes.category === 'money'){
      return blue[700]
    }
   
   }
  },
});

export default function NoteCard({ notes, handleDelete }) {
  const classes = useStyles(notes);
  return (
    <div>
      <Card elevation={2} className={classes.test}
      >
    
        <CardHeader
        avatar = {<Avatar className={classes.avatar}>
          {notes.category[0].toUpperCase()}
          
        </Avatar>}
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
