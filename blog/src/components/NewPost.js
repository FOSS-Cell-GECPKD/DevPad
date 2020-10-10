import React, { useContext, useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PostListContext } from "../Context/PostListContext";
import {
  Paper,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import { Close, Send } from "@material-ui/icons";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5rem auto 1rem",
    textAlign: "center",
  },
  Paper: {
    padding: "1rem",
  },
  heading: {
    color: theme.palette.primary.main,
    margin: "2rem auto",
  },
}));

const NewPost = () => {
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const { setPosts,logged } = useContext(PostListContext);
  const [error, setError] = useState("Successfully Posted!!!");
  const [data, setData] = useState({});

  useEffect(() => {
    
    if (logged === false){
      history.push('/login')
    }
  }, [logged,history])

  const handleChange = (e) => {
    if (e.target.name === "tags") {
      setData({
        ...data,
        [e.target.name]: e.target.value.split(","),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const Message = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={error}
        action={
          <React.Fragment>
            <Button component={Link} to="/posts" variant="text" size="small">
              Go to Posts
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    );
  };

  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://devpadfoss.herokuapp.com/posts/", {
      ...data,
      createdAt: Number(new Date()),
    })
      .then((response) => {
        setOpen(true);
        setPosts({});
      })
      .catch((error) => {
        setError(error.msg);
        console.log(error);
        setOpen(true);
      });
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Message />
      <Typography variant="h4" className={classes.heading}>
        New Post
      </Typography>
      <Paper className={classes.Paper}>
        <Grid container component="form" spacing={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="post-title"
              label="Title"
              variant="outlined"
              name="title"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="post-content"
              label="Content"
              variant="outlined"
              helperText="use html tags"
              name="html"
              onChange={handleChange}
              multiline
              rows={8}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="post-tags"
              label="Tags"
              helperText="Seperate with commas"
              variant="outlined"
              name="tags"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              type="submit"
              onClick={handleSubmit}
              className={classes.button}
              endIcon={<Send />}
              size="large"
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NewPost;
