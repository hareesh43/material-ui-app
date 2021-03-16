import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create Note
      </Typography>
      <Button variant="contained" color="primary" type="submit"
      endIcon = {<SendIcon/>}
      >
        Submit
      </Button>
    </Container>
  );
}
