import {
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import React,{useContext} from "react";
import { PostListContext } from "../Context/PostListContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  submitButton: {
    margin: "3% auto",
  },
  Card: {
    marginBottom: "1rem",
  },
  Head: {
    textAlign: "center",
  },
  Content: {
    textAlign: "center",
  },
  newAcc: {
    textAlign: "center",
    marginBottom: "5%",
  },
  Form: {
    margin: "15% auto 15%",
    width: "40%",
    minWidth: "400px",
  },
  Formdata: {
    margin: " 5% 25%",
  },
}));

const Form = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const {setLogged,setUser} = useContext(PostListContext);
  const formType = props.type;
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    cpassword: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "REGISTER") {
      if (values.password !== values.cpassword) {
        alert("Password Mismatch !!!");
      } else {
        const url = "https://devpadfoss.herokuapp.com/users/signup";
        Axios.post(url, {
          username: values.username,
          password: values.password,
        })
          .then(() => {
            alert("Successfully Registered !!!");
            history.push("/login");
          })
          .catch((error) => alert(error));
      }
    } else {
      const url = "https://devpadfoss.herokuapp.com/users/login";
      Axios.post(url, {
        username: values.username,
        password: values.password,
      }).then((res) => {
        alert("Successfully logged In !");
        setLogged(true);
        setUser(res.data.user);
        history.push('/new');
      }).catch(err=>alert(err));
    }
  };

  return (
    <Container>
      <Card className={classes.Form}>
        <CardHeader title={formType} className={classes.Head} />
        <CardContent className={classes.Content}>
          <FormControl className={classes.Formdata} variant="filled">
            <InputLabel htmlFor="username">Username</InputLabel>
            <FilledInput
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange("username")}
              labelwidth={70}
            />
          </FormControl>

          <FormControl className={classes.Formdata} variant="filled">
            <InputLabel htmlFor="password">Password</InputLabel>
            <FilledInput
              name="password"
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelwidth={70}
            />
          </FormControl>

          {formType === "REGISTER" && (
            <FormControl className={classes.Formdata} variant="filled">
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <FilledInput
                id="confirm-password"
                type={values.showPassword ? "text" : "password"}
                value={values.cpassword}
                onChange={handleChange("cpassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelwidth={70}
              />
            </FormControl>
          )}

          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {formType}
          </Button>
        </CardContent>
        {formType === "LOGIN" && (
          <Typography className={classes.newAcc} variant="body2" component="p">
            Don't have an account already?
            <br></br>
            <a href="/register">Create a new account here</a>
          </Typography>
        )}
      </Card>
    </Container>
  );
};

export default Form;
