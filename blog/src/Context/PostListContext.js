import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { light_theme, dark_theme } from "../Theme/Theme";
export const PostListContext = createContext();
export const PostListContextProvider = (props) => {
  const [theme, setTheme] = useState(light_theme);
  const cur_theme = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    let value = cur_theme ? dark_theme : light_theme;
    setTheme(value);
  }, [cur_theme]);

  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    await axios.get("http://localhost:5000/posts/").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostListContext.Provider
      value={{
        posts,
        theme,
        setPosts,
      }}
    >
      {props.children}
    </PostListContext.Provider>
  );
};
