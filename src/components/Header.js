import {
  makeStyles,
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#26ddf9",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const { currency, setCurrency, user } = CryptoState();

  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="default" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
              variant="h6"
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="standard"
              style={{
                width: 100,
                height: 40,
                color: "#fff",

                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"GBP"}>GBP</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
            {user ? "Logout" : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
