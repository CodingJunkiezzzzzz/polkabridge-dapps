import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Stake from "../Stake/Stake";
import PbrStatistics from "common/PbrStatistics";
import BalanceCard from "common/BalanceCard";
import { supportedStaking, unsupportedStaking } from "../../constants";
import useActiveWeb3React from "hooks/useActiveWeb3React";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundPosition: "center center,center center",
    backgroundRepeat: "no-repeat,no-repeat",
    backgroundSize: "cover,contain",
    height: "100%",
    width: "100%",
    paddingTop: "5%",
    paddingLeft: "3%",
    paddingRight: "3%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10%",

      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  pageTitle: {
    fontWeight: 600,
    fontSize: 32,
    letterSpacing: "0.02em",
    color: "#ffffff",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      color: "#e5e5e5",
      fontSize: 32,
    },
  },

  para: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: "0.02em",
    color: "#414141",
    textAlign: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const store = useSelector((state) => state);
  const { menuTabIndex } = store.ui;

  const { active, account, chainId } = useActiveWeb3React();

  return (
    <Box>
      {menuTabIndex === 0 && (
        <Box className={classes.background}>
          <h3 variant="h1" className={classes.pageTitle}>
            Dashboard
          </h3>
          <div className="row mt-5">
            <div className="col-md-8 mb-3">
              <PbrStatistics />
            </div>
            <div className="col-md-4">
              <div>
                <BalanceCard tokens={supportedStaking[chainId]} />
              </div>
            </div>
          </div>
        </Box>
      )}
      {menuTabIndex === 1 && <Stake />}
      {/* {menuTabIndex === 2 && <Launchpad />} */}
      {/* {menuTabIndex === 3 && <Ino />} */}
    </Box>
  );
}
