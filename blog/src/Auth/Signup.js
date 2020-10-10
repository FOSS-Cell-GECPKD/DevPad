import React, { useState } from "react";
import { Paper, Grid, Button, TextField } from "@material-ui/core";
import Axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const url = "";
    Axios.post();
  };

  return (
    <Paper>
      Register page
    </Paper>
  );
};
export default Signup;


// register api
//https://localhost:5000/users/signup