import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Home from "./components/Home";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PostListContext } from "./Context/PostListContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  const { theme } = useContext(PostListContext);
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/posts" exact component={PostList} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/new" component={NewPost} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
