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
    fontWeight: 400,
    fontSize: 10,
    letterSpacing: "0.02em",
    color: "#919191",
    textAlign: "center",
  },

  para: {
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: "0.02em",
    color: "#e5e5e5",
    textAlign: "center",
  },
  cardTitle: {
    paddingTop: 5,
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    textAlign: "center",
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
    background: `url(
      'https://miro.medium.com/max/1400/1*wKoQqhuPZG5Zq6LFZ7pU8g.jpeg'
    )`,
    height: 140,
    width: "100%",
    backgroundSize: "cover",
    padding: 5,
    borderRadius: 5,
  },
}));

export default function NFTCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <div className={classes.filterCard}>
        <Box pt={0} px={3}>
          <Box className={classes.imageWrapper}></Box>
          <Box>
            <Typography
              variant="h6"
              className={classes.cardTitle}
              textAlign="center"
              fontWeight={600}
            >
              FOTA NFTs
            </Typography>
            <Typography
              variant="h6"
              className={classes.subheading}
              textAlign="center"
              fontWeight={600}
            >
              Fight Of The Ages NFTs
            </Typography>
            <Box display={"flex"} justifyContent="center" my={2}>
              <div
                style={{
                  borderRadius: 10,
                  background: "#521B8F",
                  padding: "5px 20px 5px 20px",
                  color: "white",
                  width: "fit-content",
                  fontSize: 14,
                }}
              >
                Owned NFTs: <strong>01</strong>
              </div>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              textAlign="left"
              fontSize={13}
              fontWeight={400}
              color="#f9f9f9"
            >
              Premium class NFTs to boost character level and booster card in
              game.
            </Typography>
          </Box>

          <Typography
            variant="body2"
            textAlign="left"
            fontWeight={400}
            fontSize={12}
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
          <Box display={"flex"} justifyContent="space-between">
            <Typography
              variant="body2"
              textAlign="left"
              fontWeight={400}
              fontSize={12}
              color="#bdbdbd"
              pb={1}
            >
              0
            </Typography>
            <Typography
              variant="body2"
              textAlign="left"
              fontWeight={400}
              fontSize={12}
              color="#bdbdbd"
              pb={1}
            >
              Max: 50
            </Typography>
          </Box>
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
                End Date:
              </Typography>

              <Typography
                variant="body2"
                className={classes.para}
                textAlign="center"
                fontWeight={700}
                ml={1}
              >
                11 June,2022 2PM UTC
              </Typography>
            </Box>
            {/* <Box display={"flex"} justifyContent={"space-between"} mb={1}>
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
                fontWeight={700}
                ml={1}
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
                className={classes.para}
                textAlign="center"
                fontWeight={700}
                ml={1}
              >
                40
              </Typography>
            </Box> */}
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
                fontWeight={700}
                ml={1}
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
                className={classes.para}
                textAlign="center"
                fontWeight={700}
                ml={1}
              >
                BSC
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
                  textTransform: "none",
                }}
              >
                Purchase Now
              </Button>
            </Link>{" "}
          </Box>
        </Box>
      </div>
    </Box>
  );
}
