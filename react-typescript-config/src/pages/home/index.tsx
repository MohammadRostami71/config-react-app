import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user/auth.reducers";

import useStyles from "./useStyles";

const HomePage = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    axios.get("/todosd").then((res) => console.log(res));
  }, []);

  return (
    <div className={classes.root}>
      <Typography>this is home</Typography>

      <br />

      <Button variant="contained" onClick={logoutHandler}>
        logout
      </Button>
    </div>
  );
};

export default HomePage;
