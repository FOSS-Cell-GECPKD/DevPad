import React, { useContext } from "react";
import PostItem from "./PostItem";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PostListContext } from "../Context/PostListContext";
const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.mako_primary,
    margin: "2rem auto",
  },
  Container: {
    marginTop: "3rem",
    paddingBottom: "2rem",
    minHeight: "80vh",
  },
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));
const PostList = (props) => {
  const { posts } = useContext(PostListContext);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container className={classes.Container}>
        <Grid container justify="center">
          <Grid item lg={12} style={{ textAlign: "center" }}>
            <Typography
              color="primary"
              variant="h4"
              className={classes.heading}
              gutterBottom
            >
              Posts
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify={"center"}
            alignItems="center"
            spacing={3}
          >
            {posts.length !== 0 ? (
              <>
                {posts.map((post) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={post._id}
                    className={classes.Grid}
                  >
                    <PostItem {...{ post, location: props.location }} />
                  </Grid>
                ))}
              </>
            ) : (
              <h3>no posts</h3>
            )}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default PostList;
