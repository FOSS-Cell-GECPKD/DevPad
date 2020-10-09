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
    Typography
  } from "@material-ui/core";
  import Button from '@material-ui/core/Button';
  import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
    submitButton:{
        margin:"3% auto"
    },
    Card: {
      marginBottom: "1rem",
    },
    Head:{
        textAlign:"center"
    },
    Content:{
        textAlign:"center"
    },
    newAcc:{
        textAlign:"center",
        marginBottom: "5%"
    },
    Form:{
        margin: "15% auto 15%",
        width: "40%",
        minWidth:"400px"
    },
    Formdata:{
        margin: " 5% 25%"
    }
  }));

  

const Form =(props) => {
    const classes = useStyles();

    const formType = props.type;

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        cpassword: '',
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

    return <Container>
            <Card className={classes.Form}>
                <CardHeader title={formType} className={classes.Head}/>
                <CardContent className={classes.Content}>
                <FormControl className={classes.Formdata} variant="filled">
                <InputLabel htmlFor="username">Username</InputLabel>
                    <FilledInput
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange('username')}
                    labelWidth={70}
                    />
                </FormControl>

                <FormControl className={classes.Formdata} variant="filled">
                <InputLabel htmlFor="password">Password</InputLabel>
                    <FilledInput
                    name="password"
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
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
                    labelWidth={70}
                    />
                </FormControl>

                {formType==="REGISTER" && (<FormControl className={classes.Formdata} variant="filled">
                <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                    <FilledInput
                    id="confirm-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.cpassword}
                    onChange={handleChange('cpassword')}
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
                    labelWidth={70}
                    />
                </FormControl>)}

                <Button className={classes.submitButton} variant="contained" color="primary">{formType}</Button>

                </CardContent>
                {formType==="LOGIN" && (<Typography className={classes.newAcc} variant="body2" component="p">
                Don't have an account already?
                <br></br>
                <a href="/register">Create a new account here</a>
                </Typography>)}

                </Card>
            </Container>
}

export default Form;