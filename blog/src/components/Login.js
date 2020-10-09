import {Collapse, Container, IconButton, Typography} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Close  } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React ,{useState} from "react";
import Form from "./Form";

const useStyles = makeStyles(() => ({
    Collapse: {
      marginTop: "5rem",
      borderRadius: "4px",
    },
    forgot:{
        position:"relative",
        marginTop:"-12%",
        marginBottom:"10%",
        textAlign : "center"
    }
  }));
  

const Login =() => {
    const [open, setOpen] = useState(true);

    const classes = useStyles();

    return <Container>
        <Collapse in={open} className={classes.Collapse}>
        <Alert
          variant="filled"
          color="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Login First to create your own post</AlertTitle>
        </Alert>
      </Collapse>
    <Form type="LOGIN" />
    <Typography className={classes.forgot} variant="body2" component="p">
        <a href="mailto:fosscell@gecskp.ac.in?subject=Forgot%Password">Forgot Password ?</a>
    </Typography>
    </Container>
}

export default Login;