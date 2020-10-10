import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Paper, Typography, Box, Divider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: "5rem",
    height: "100%",
    minHeight: "100vh",
  },
  Paper: {
    margin: "0 1rem 1rem",
  },
  Box: {
    flexGrow: "1",
    padding: "1rem",
    height: "100%",
    overflow: "auto",
  },
  title: {
    padding: "2rem 0 1rem",
    textAlign: "center",
  },
  Divider: {
    width: "80%",
    margin: "auto",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const { match } = props;
  const [post, setPost] = useState({});
  async function getPost(id) {
    await axios
      .get(`https://devpadfoss.herokuapp.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getPost(match.params.id);
  }, [match]);
  const renderHTML = () => {
    return { __html: post.html };
  };

  return (
    <>
      <NavBar {...{ props }} />
      <Container className={classes.root}>
        <Paper className={classes.Paper}>
          {post ? (
            <>
              <Paper elevation="0">
                <Typography variant="h4" className={classes.title}>
                  {post.title}
                </Typography>
                <Divider className={classes.Divider} component="div" />
                <Box>
                  <div
                    className={classes.Box}
                    dangerouslySetInnerHTML={renderHTML()}
                  />
                </Box>
              </Paper>
              <br />
              {post.date}
            </>
          ) : (
            <div>loading...</div>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Post;
