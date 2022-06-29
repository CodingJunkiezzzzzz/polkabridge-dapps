//done
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Close, OpenInNew } from "@mui/icons-material";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Web3 from "web3";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    display: "grid",
    placeItems: "center",
    background: "rgba(0,0,0,0.2)",
  },
  container: {
    width: "100%",
    height: "fit-content",
    padding: 10,
    minHeight: 400,
    maxWidth: 540,
    position: "relative",
    backgroundColor: "#140F16",
    border: "15px solid #6A55EA",
    display: "flex",
    alignItems: "center",
    zIndex: 11,
    [theme.breakpoints.down("md")]: {
      border: "10px solid #D1FE1D",
      width: "100%",
      maxWidth: "95%",
      height: 350,
    },
    [theme.breakpoints.down("sm")]: {
      height: "max-content",
    },
  },
  closeIcon: {
    position: "absolute",
    color: "white",
    top: 8,
    right: 8,
    height: 22,
    width: 22,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      top: 5,
      right: 5,
      height: 18,
      width: 18,
    },
  },
  inputWrapper: {
    padding: 10,
  },

  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
    lineHeight: "20%",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },

  para: {
    color: "#e5e5e5",
    textAlign: "center",
    fontSize: 13,
    fontWeight: 300,
    paddingTop: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
      paddingTop: 15,
    },
  },
  activateButton: {
    width: "fit-content",
    height: "50px",
    background: "#FF5AFF",
    boxSizing: "border-box",
    borderRadius: "15px",
    fontSize: 16,
    lineHeight: "33px",
    color: "#ffffff",
    fontWeight: 700,

    padding: "12px 30px 12px 30px",
    "&:hover": {
      background: "#FFB469",
    },
    [theme.breakpoints.down("md")]: {
      padding: "12px 20px 12px 20px",
      fontSize: 18,
    },
  },
  connectButton: {
    width: "fit-content",

    background: theme.palette.primary.main,

    boxSizing: "border-box",
    border: "1px solid #212121",
    borderRadius: "15px",
    fontSize: 15,
    lineHeight: "33px",
    color: "#ffffff",
    fontWeight: 500,
    marginTop: 20,
    padding: "7px 30px 7px 30px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      padding: "12px 20px 12px 20px",
      fontSize: 18,
    },
  },

  svgImage: {
    width: 100,
    [theme.breakpoints.down("md")]: {
      width: 70,
    },
  },
  spoon1Image: {
    width: 40,
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  spoon2Image: {
    width: 30,
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    marginRight: 10,
    backgroundColor: "#FF87FF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
  },
  icon: {
    width: 25,
    height: 25,
    color: "white",
  },
}));

const AccountPopup = ({ setBalancePopup }) => {
  const classes = useStyles();

  const { user, logout } = useMoralis();

  const Web3Api = useMoralisWeb3Api();
  const userAddress = user ? user.attributes.ethAddress : "...";

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    const result = await Web3Api.account.getNativeBalance({
      network: "kovan",
      chain: "kovan",
    });

    let bal = Web3.utils.fromWei(result.balance.toString(), "ether");
    setBalance(parseFloat(bal).toFixed(3));
    return bal;
  };

  const resetPopup = () => {
    setBalancePopup(false);
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className="h-100 w-100">
          <div className="d-flex justify-content-end" onClick={resetPopup}>
            <Close
              style={{ cursor: "pointer" }}
              className={classes.closeIcon}
            />
          </div>
          <div className="d-flex flex-column justify-content-around">
            <div className="mt-1">
              <Typography
                variant="h4"
                className={classes.heading}
                fontWeight={700}
              >
                My Wallet
              </Typography>
              <Typography
                variant="h6"
                className={classes.para}
                fontWeight={400}
                mt={1}
              >
                MY CONNECTED ACCOUNT AND DETAILS
              </Typography>
            </div>

            <div className="mt-5">
              <div className="row">
                <div className="col-md-4">
                  {" "}
                  <div className="text-center my-0">
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/e-wallet-4802219-3998266.png"
                      className={classes.svgImage}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  {" "}
                  <div className="mt-1">
                    <Typography
                      variant="h6"
                      className={classes.heading}
                      textAlign="left"
                      style={{ textAlign: "left", fontSize: 15 }}
                    >
                      Address :
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.para}
                      fontWeight={400}
                      style={{ textAlign: "left", fontSize: 14, marginTop: 6 }}
                    >
                      <pre style={{ wordWrap: "break-word" }}>
                        {userAddress}
                      </pre>
                    </Typography>
                  </div>
                  <div className="mt-3">
                    <Typography
                      variant="h6"
                      className={classes.heading}
                      fontWeight={600}
                      style={{ textAlign: "left", fontSize: 15, marginTop: 30 }}
                    >
                      Balance :
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.para}
                      fontWeight={400}
                      style={{ textAlign: "left", fontSize: 14, marginTop: 6 }}
                    >
                      <pre>{balance} MATIC</pre>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly">
              <button className={classes.connectButton} onClick={logout}>
                View on explorer <OpenInNew />
              </button>
              <button className={classes.connectButton} onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPopup;
