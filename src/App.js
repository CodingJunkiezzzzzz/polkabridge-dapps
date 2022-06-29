import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Fragment } from "react";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store";
import { createWeb3ReactRoot, Web3ReactProvider } from "web3-react-core";
import { NetworkContextName } from "./constants";
import getLibrary from "./utils/getLibrary";
import { BlockUpdater } from "./hooks/useBlockNumber";
import MulticallUpdater from "./state/multicall/updater";
import { Grid, Box, Hidden } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "common/SideBar";
import Appbar from "common/Appbar";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

function App() {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <ThemeProvider theme={theme}>
            <MulticallUpdater />
            <BlockUpdater />
            <Router>
              <Box style={{ minHeight: "100vh" }}>
                <Grid container style={{ minHeight: "100vh" }}>
                  <Hidden mdDown>
                    <Grid item md={2} xs={12}>
                      <SideBar />
                    </Grid>
                  </Hidden>
                  <Grid
                    item
                    md={10}
                    xs={12}
                    mt={1}
                    style={{
                      background: `linear-gradient(90deg,#020203,#250c41)`,
                    }}
                  >
                    <Appbar />
                    <Routes>
                      <Route path="/" element={<Home />} />
                    </Routes>
                  </Grid>
                </Grid>
              </Box>
            </Router>
          </ThemeProvider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
