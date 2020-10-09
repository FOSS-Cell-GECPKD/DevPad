import {
  Collapse,
  IconButton,
  Typography,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Close, NewReleases, EmojiEmotions } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useContext, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import CardImgWebP from "./../Assets/creative-image.webp";
import CardImgJpg from "./../Assets/creative-image.jpg";
import { PostListContext } from "../Context/PostListContext";
import PostItem from "./PostItem";
const useStyles = makeStyles(() => ({
  Collapse: {
    marginTop: "5rem",
    marginBottom: "1rem",
    borderRadius: "4px",
  },
  Note: {
    padding: "1rem",
    // marginBottom: "1rem",
  },
  responsive: {
    width: "100%",
    height: "auto", // 16:9
    position: "relative",
    maxHeight: "50vw",
  },
  media: {
    maxHeight: "50vw",
    overflow: "hidden",
  },
  Card: {
    marginBottom: "1rem",
  },
  PostItem: {
    width: "100%",
  },
  Container: {
    marginBottom: "1rem",
  },
}));

const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} alt="welcome-card-img" />
    </picture>
  );
};
const Home = (props) => {
  const history = useHistory();
  const { posts } = useContext(PostListContext);

  const [open, setOpen] = useState(true);
  const classes = useStyles();

  useLayoutEffect(()=> {
      const alreadyVisitor = JSON.parse(localStorage.getItem('alreadyVisitor'));
      if(alreadyVisitor && !alreadyVisitor.new){
        setOpen(false);
       } else {
        const visitor = {new:false}
        localStorage.setItem('alreadyVisitor', JSON.stringify(visitor));
      }
  },[])
  
  return (
    <Container className={classes.Container}>
      <Collapse in={open} className={classes.Collapse}>
        <Alert
          variant="filled"
          color="info"
          icon={<NewReleases color="secondary" />}
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
          <AlertTitle>Hello, Welcome to DevPad</AlertTitle>A Simple Blogger Web
          App for Web Devs
        </Alert>
      </Collapse>
      <Grid container spacing={2} justify={"center"}>
        <Grid item xs={12} md={6}>
          <Card className={classes.Card}>
            <CardHeader title="Create your first post" />
            <CardMedia className={classes.media}>
              <ImgWithFallback
                src={CardImgWebP}
                fallback={CardImgJpg}
                className={classes.responsive}
                alt="A photo showing the expiration date on a box of Lucky Charms"
              />
            </CardMedia>
            <CardContent>
              <Typography variant="body2" component="p">
                Show your support for this idea, Make a unique post{" "}
                <EmojiEmotions className={classes.favorite} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="text"
                size="small"
                onClick={() => history.push("/new")}
              >
                Create first Post
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => history.push("/posts")}
              >
                Goto Posts
              </Button>
            </CardActions>
          </Card>
          <Grid item xs={12}>
            <Paper className={classes.Note}>
              <Typography variant="subtitle1" gutterBottom>
                Note from creator:
              </Typography>
              <Typography variant="body1" gutterBottom>
                This is made for the people who making creative content, and it
                is also specialised for web devs which you can see from posts
                that... you can create content like a webpage inside a page...
                so you can make anything beautiful inside it using pure html
                code and that's every developer need.{" "}
              </Typography>
              <Typography variant="subtitle2" align="right">
                - Anas Vakyathodi
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          spacing={2}
          alignContent="flex-start"
        >
          <Grid item xs={12}>
            <Typography>Recent Posts:</Typography>
          </Grid>
          {posts.slice(0, 4).map((post, index) => (
            <Grid item xs={12} key={index}>
              <PostItem {...{ post }} className={classes.PostItem} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
