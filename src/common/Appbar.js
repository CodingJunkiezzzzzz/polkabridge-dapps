import { Box, Container, Avatar, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ConnectButton from "./ConnectButton";
import { Link } from "react-router-dom";
import Wallet from "./Wallet";
import connectors from "../connection/connectors";
import { WalletConnectConnector } from "web3-react-walletconnect-connector";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import { useEffect, useState } from "react";
import AccountDialog from "./AccountDialog";

const useStyles = makeStyles((theme) => ({
  linkItems: {
    paddingRight: 20,
    paddingTop: 7,
    fontWeight: 600,
    paddingLeft: 15,
    fontSize: 15,
  },
  logo: {
    height: 50,
    [theme.breakpoints.down("sm")]: {
      height: 30,
    },
  },
  paper: {
    top: "67px !important",
    left: "unset !important",
    right: "0 !important",
    width: "45%",
    borderRadius: "0",
    backgroundColor: "black",
    transformOrigin: "16px -1px !important",
  },
  listItem: {
    justifyContent: "center",
  },
  navbarButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "7px 18px 7px 18px",
    border: "none",
    borderRadius: 10,
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: "none",
    fontSize: 15,
    "&:hover": {
      background: theme.palette.primary.hover,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  connectedButton: {
    color: "white",
    padding: "7px 5px 7px 10px",
    border: "none",
    borderRadius: 10,
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: "none",
    fontSize: 15,
    "&:hover": {
      background: theme.palette.primary.hover,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  connectedAddress: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    padding: "4px 18px 4px 18px",
    border: "none",
    borderRadius: 10,
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: "none",
    fontSize: 15,

    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  numbers: {
    color: "#f9f9f9",
    fontSize: 14,
  },
}));

const Appbar = () => {
  const classes = useStyles();

  const [accountDialog, setAccountDialog] = useState(false);

  const { active, account, activate, deactivate } = useActiveWeb3React();

  useEffect(() => {
    if (!active && localStorage.connected === "yes") {
      const connector = connectors.injected;
      createConnectHandler(connector);
    }
  }, [active]);

  const handleLogout = () => {
    localStorage.connected = "none";
    deactivate();
  };

  const handleWalletConnect = (connectorType = "injected") => {
    try {
      let connector;
      if (connectorType === "injected") {
        connector = connectors.injected;
      } else if (connectorType === "walletConnect") {
        connector = connectors.walletconnect;
      } else if (connectorType === "unstoppable") {
        connector = connectors.uauth;
      } else {
        connector = connectors.injected;
      }

      createConnectHandler(connector);
      setAccountDialog(false);
    } catch (error) {}
  };

  const createConnectHandler = async (connector) => {
    try {
      console.log("trying connection with ", connector);
      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (connector instanceof WalletConnectConnector) {
        connector.walletConnectProvider = undefined;
      }

      await activate(connector);
      localStorage.connected = "yes";
    } catch (error) {
      console.error("createConnectHandler", error);
    }
  };

  const handleWalletClick = () => {
    try {
      setAccountDialog(true);
    } catch (error) {}
  };

  return (
    <Box style={{ position: "relative", zIndex: 10 }}>
      <header>
        <AccountDialog
          open={accountDialog}
          handleLogout={handleLogout}
          handleClose={() => setAccountDialog(false)}
          handleConnection={handleWalletConnect}
        />
        <Hidden mdDown>
          <Container>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              mt={1}
            >
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <div style={{ padding: 3, paddingRight: 10 }}>
                  <Avatar src="https://cdn3d.iconscout.com/3d/premium/thumb/notification-bell-4730505-3934029.png" />{" "}
                </div>{" "}
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Link to="activities">
                    {" "}
                    <div
                      style={{
                        paddingLeft: 2,
                        color: "white",
                        fontWeight: 500,
                        fontSize: 15,
                        textDecoration: "none",
                        marginRight: 10,
                        // borderColor: theme.palette.primary.light,
                        // borderWidth: 2,
                        // borderStyle: "solid",
                        border: "2px solid #7825D5",
                        borderRadius: 12,
                        padding: "7px 15px 7px 15px",
                      }}
                    >
                      Ethereum
                    </div>
                  </Link>
                </Box>
                <Wallet onWalletClick={handleWalletClick} />
              </Box>
            </Box>
          </Container>
        </Hidden>
        <Hidden smUp>
          <Container>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginRight: "2rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/free/thumb/squigly-globe-3494833-2926648@0.png"
                    alt="SleepSwap"
                    className={classes.logo}
                  />
                  <div
                    style={{
                      paddingLeft: 2,
                      color: "black",
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    PolkaBridge
                  </div>
                </div>
                <Box>
                  {/* <Box display="flex" justifyContent="flex-start">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.linkItems}
                      style={{
                        color: "black",
                      }}
                    >
                      Home
                    </Typography>
                  </Link>
                </Box> */}
                </Box>
              </Box>

              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <div style={{ padding: 3, paddingRight: 10 }}>
                  <Avatar src="https://cdn3d.iconscout.com/3d/premium/thumb/notification-bell-4730505-3934029.png" />{" "}
                </div>
                <div style={{ padding: 3, paddingRight: 10 }}>
                  <Avatar src="https://cdn3d.iconscout.com/3d/premium/thumb/burger-menu-2891366-2409762@0.png" />{" "}
                </div>
              </Box>
            </Box>
          </Container>
        </Hidden>
      </header>
    </Box>
  );
};

export default Appbar;
