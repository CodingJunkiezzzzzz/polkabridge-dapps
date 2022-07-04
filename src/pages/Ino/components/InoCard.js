import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  filterCard: {
    marginTop: 15,
    marginBottom: 15,
    height: "100%",
    width: "92%",
    paddingTop: 20,
    paddingBottom: 20,
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.03)",
    backgroundColor: "#140F16",
    border: "3px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    "&:hover": {
      boxShadow: "0px 24px 33px -9px #0000005C",
    },

    [theme.breakpoints.down("md")]: {
      height: "100%",
      width: "100%",
    },
  },
  subheading: {
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.02em",
    color: "#919191",
    textAlign: "left",
  },

  para: {
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: "0.02em",
    color: "#e5e5e5",
    textAlign: "center",
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    textAlign: "left",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  buttonFirst: {
    width: "fit-content",
    color: "#212121",
    backgroundColor: "#eeeeee",
    padding: "12px 50px 12px 50px",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    cursor: "pointer",
  },
  buttonSecond: {
    width: "fit-content",
    color: "white",
    backgroundColor: "#6A55EA",
    padding: "12px 50px 12px 50px",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    cursor: "pointer",
  },

  imageWrapper: {
    // background: `linear-gradient(332.86deg, rgba(146, 103, 219, 0.3) 26.45%, rgba(215, 86, 236, 0.3) 69.5%)`,
    // borderRadius: "20%",
    padding: 10,
  },
}));

export default function InoCard() {
  const classes = useStyles();
  const theme = useTheme();

  const [stakePopup, setStakePopup] = useState(false);

  return (
    <Box>
      <div className={classes.filterCard}>
        <Box pt={0} px={3}>
          <Box
            mb={2}
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box className={classes.imageWrapper}>
                <img
                  src="https://miro.medium.com/max/1400/1*9oPwMlH9Hz38bWhNzVdeWg.png"
                  alt=" Logo"
                  height="40px"
                />{" "}
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  className={classes.cardTitle}
                  textAlign="left"
                  fontWeight={600}
                  ml={2}
                >
                  FOTA NFTs
                </Typography>
                <Typography
                  variant="h6"
                  className={classes.subheading}
                  textAlign="left"
                  fontWeight={600}
                  ml={2}
                >
                  Fight Of The Ages NFTs
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h6"
              textAlign="left"
              fontSize={13}
              fontWeight={500}
              color="#bdbdbd"
            >
              Welcome to The Metaverse - a new era where the real meets the
              virtual. Not only delivering the best 3D-game experience, FOTA
              also empowers its players to roleplay and make their characters
              exclusively theirs in this fantasy world.
            </Typography>
          </Box>
          <Typography
            variant="body2"
            textAlign="left"
            fontWeight={400}
            fontSize={14}
            color="#bdbdbd"
            pb={1}
            mt={2}
          >
            Progress (30%)
          </Typography>
          <div class="containered">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
          <Divider />
          <Box mt={2}>
            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={13}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Start Date:
              </Typography>

              <Typography
                variant="body2"
                className={classes.para}
                textAlign="center"
                fontWeight={600}
                ml={1}
                fontSize={14}
              >
                11 June,2022 2PM UTC
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={13}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Total NFTs on Sell
              </Typography>

              <Typography
                variant="body2"
                className={classes.para}
                textAlign="center"
                fontWeight={600}
                ml={1}
                fontSize={14}
              >
                50
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={13}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Remaining Quantity
              </Typography>

              <Typography
                variant="body2"
                textAlign="center"
                fontWeight={600}
                ml={1}
                fontSize={14}
              >
                40
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={13}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Price per NFT
              </Typography>

              <Typography
                variant="body2"
                className={classes.para}
                textAlign="center"
                fontWeight={600}
                ml={1}
                fontSize={14}
              >
                0.25 BNB
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={13}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Network
              </Typography>

              <Typography
                variant="body2"
                textAlign="center"
                fontWeight={600}
                ml={1}
                fontSize={14}
              >
                Binance Smart Chain
              </Typography>
            </Box>
          </Box>

          <Box
            my={2}
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-around"}
            style={{
              border: "1px solid #4A3F55",
              padding: 5,
              borderRadius: 20,
            }}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              mt={2}
            >
              <Typography
                variant="body2"
                textAlign="center"
                fontSize={14}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                Total raise
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={32}
                fontWeight={600}
                ml={1}
                color="#FFFFFF"
              >
                $30,000
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                fontSize={14}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                <span style={{ color: "#E0077D" }}>IN BNB</span>
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              mt={2}
            >
              <Typography
                variant="body2"
                textAlign="center"
                fontSize={14}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                NFT Price
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                fontSize={32}
                fontWeight={600}
                ml={1}
                color="#FFFFFF"
              >
                $100
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                fontSize={14}
                fontWeight={600}
                ml={1}
                color="#919191"
              >
                <span style={{ color: "#E0077D" }}>PER NFT</span>
              </Typography>
            </Box>
          </Box>

          <Box
            px={2}
            mt={2}
            className="d-flex justify-content-center"
            style={{ width: "100%" }}
          >
            <Link to={"/view-ino"}>
              {" "}
              <Button
                style={{
                  borderRadius: 10,
                  background: "#521B8F",
                  padding: "9px 20px 9px 20px",
                  color: "white",
                  minWidth: 240,
                }}
              >
                View
              </Button>
            </Link>{" "}
          </Box>
        </Box>
      </div>
    </Box>
  );
}
