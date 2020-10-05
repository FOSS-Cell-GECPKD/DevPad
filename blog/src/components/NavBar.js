import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useHistory, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const path = props.location.pathname;
  const history = useHistory();
  // const classes = useStyles();
  const handleClick = () => {
    history.push("/posts");
  };
  const handleHome = () => {
    history.push("/");
  };
  const handleNew = () => {
    history.push("/new");
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" style={{ flex: "1" }} onClick={handleHome}>
          DevPad
        </Typography>
        <Button
          color="inherit"
          onClick={handleClick}
          disabled={path === "/posts" ? true : false}
        >
          Posts
        </Button>
        <IconButton onClick={handleNew}>
          <Add style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavBar);
