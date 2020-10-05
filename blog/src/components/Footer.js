import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { Favorite, Instagram, LinkedIn, Telegram } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  links: {
    margin: "0 0.5rem",
    color: theme.palette.primary.main,
  },
  Paper: {
    padding: "1rem",
    borderRadius: "0",
    width: "100%",
  },
  Favorite: {
    fontSize: "1rem",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Paper component="footer" elevation={0} className={classes.Paper}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <a href="https://www.linkedin.com/in/anasvakyathodi/">
              <LinkedIn className={classes.links} />
            </a>
            <a href="https://instagram.com/anas_vakyathodi/">
              <Instagram className={classes.links} />
            </a>
            <a href="tg://resolve?domain=anasvakyathodi">
              <Telegram className={classes.links} />
            </a>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              Developed with <Favorite className={classes.Favorite} /> Anas
              Vakyathodi
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
