import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Popover,
  IconButton,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { FileCopyRounded, ArrowForward } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
const useStyles = makeStyles((theme) => ({
  Card: {
    width: "100%",
  },
  copied: {
    padding: theme.spacing(1),
    borderRadius: "50",
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
  },
}));

const PostItem = ({ post, location }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const history = useHistory();
  const handleDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toDateString()}`;
  };
  const handleTags = (tags) => {
    return tags.map((tag, index) => <span key={index}>{tag}, </span>);
  };
  const handleClick = (id) => {
    history.push(`/posts/${id}`);
  };
  return (
    <>
      <Card className={classes.Card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {post.title[0].toUpperCase()}
            </Avatar>
          }
          action={
            <CopyToClipboard
              text={`${window.location.href}/${post._id}`}
              // onCopy={() => this.setState({ copied: true })}
            >
              <IconButton
                aria-describedby={id}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <FileCopyRounded color="primary" />
              </IconButton>
            </CopyToClipboard>
          }
          title={post.title}
          subheader={handleDate(post.createdAt)}
        />
        <CardContent>
          <Typography variant="subtitle2" color="primary">
            Tags: {handleTags(post.tags)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            endIcon={<ArrowForward />}
            onClick={() => handleClick(post._id)}
          >
            Goto Post
          </Button>

          <Popover
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <Typography className={classes.copied}>Copied</Typography>
          </Popover>
        </CardActions>
      </Card>
    </>
  );
};

export default PostItem;
