import React,{useContext} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { PostListContext } from "./../Context/PostListContext";
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
  const {user} = useContext(PostListContext);
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
        {user &&
        <Avatar style={{marginRight:'1rem'}}>{user[0].toUpperCase()}
</Avatar>}
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
