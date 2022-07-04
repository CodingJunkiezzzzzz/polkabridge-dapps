import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  LinkedIn,
  Mail,
  Telegram,
  Twitter,
  Verified,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import NFTCard from "./components/NFTCard";

const useStyles = makeStyles((theme) => ({
  background: {
    // backgroundImage: 'url("images/network.png")',
    backgroundPosition: "center center,center center",
    backgroundRepeat: "no-repeat,no-repeat",
    backgroundSize: "cover,contain",
    height: "100%",
    width: "100%",
    paddingLeft: "3%",
    paddingRight: "3%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "5%",
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  imageWrapper: {
    // background: `linear-gradient(332.86deg, rgba(146, 103, 219, 0.3) 26.45%, rgba(215, 86, 236, 0.3) 69.5%)`,
    borderRadius: "20%",
    padding: 20,
  },

  title: {
    fontWeight: 600,
    fontSize: 36,
    letterSpacing: "0.02em",
    color: "#ffffff",
    textAlign: "left",
  },
  subheading: {
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: "0.02em",
    color: "#919191",
    textAlign: "left",
  },

  description: {
    fontWeight: 400,
    fontSize: 15,
    letterSpacing: "0.02em",
    color: "#919191",
    textAlign: "left",
  },

  para: {
    fontWeight: 400,
    fontSize: 15,
    letterSpacing: "0.02em",
    color: "#f9f9f9",
    textAlign: "left",
  },
  li: {
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: "0.02em",
    color: "#f9f9f9",
    textAlign: "left",
  },
  buttonWrapper: {
    marginTop: 10,
    width: "fit-content",
    padding: "2px 10px 2px 10px",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 14,
  },
  buttonCard: {
    width: "fit-content",
    padding: "10px 20px 10px 20px",
    color: "#f5f5f5",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
      padding: "10px 10px 10px 10px",
    },
  },
  aboutCard: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    minHeight: 200,
    height: "100%",
    padding: 10,
  },
  infoCard: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    minHeight: 200,
    height: "100%",
    padding: 10,
  },
  joinPoolButton: {
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 22,
    color: "#521B8F",
    padding: "6px 40px 6px 40px",
    backgroundColor: "white",
    textTransform: "none",
    marginTop: 15,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  },
}));

export default function InoDetails() {
  const classes = useStyles();
  const theme = useTheme();

  const [saleStatus, setSaleStatus] = useState(true);
  const [visibleAbout, setVisibleAbout] = useState(false);

  return (
    <Box>
      <Box className={classes.background}>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box className={classes.imageWrapper}>
              <img
                src="https://miro.medium.com/max/1400/1*9oPwMlH9Hz38bWhNzVdeWg.png"
                alt="Company Logo"
                height="135px"
              />{" "}
            </Box>
            <Button
              style={{
                height: 26,
                marginTop: 10,
                width: "fit-content",
                fontSize: 10,
                borderRadius: 10,
                background: "#7825D5",
                padding: "2px 15px 2px 15px",
                color: "white",
              }}
            >
              <Verified style={{ color: "#81c784", padding: 3 }} /> Guaranteed
            </Button>
          </Box>
          <Box ml={5} style={{ width: "60%" }}>
            <Typography
              variant="h6"
              className={classes.title}
              textAlign="left"
              fontWeight={600}
            >
              FOTA NFTs
            </Typography>
            <Typography
              variant="h6"
              className={classes.subheading}
              textAlign="left"
              fontWeight={600}
            >
              Fight Of The Ages NFTs
            </Typography>
            {!saleStatus && (
              <Box
                display={"flex"}
                justifyContent="flex-start"
                className={classes.buttonWrapper}
              >
                <Box
                  className={classes.buttonCard}
                  style={{ color: "#31B22F" }}
                >
                  Presale Starts in:{" "}
                </Box>
                <Divider
                  light
                  variant="fullWidth"
                  orientation="vertical"
                  style={{ color: "white", height: "100%", width: 1 }}
                />
                <Box className={classes.buttonCard}>16d : 01h : 50m : 10s</Box>
              </Box>
            )}
            {saleStatus && (
              <Box
                display={"flex"}
                justifyContent="flex-start"
                className={classes.buttonWrapper}
              >
                <Box
                  className={classes.buttonCard}
                  style={{ color: "#FF5252" }}
                >
                  Sale ends in:{" "}
                </Box>
                <Divider
                  light
                  variant="fullWidth"
                  orientation="vertical"
                  style={{ color: "white", height: "100%", width: 1 }}
                />
                <Box className={classes.buttonCard}>16d : 01h : 50m : 10s</Box>
              </Box>
            )}
            <Box mt={2}>
              <Button
                onClick={() => setVisibleAbout(!visibleAbout)}
                style={{
                  borderRadius: 10,
                  background: "transparent",
                  padding: "5px 20px 5px 20px",
                  border: "1px solid #521B8F",
                  color: "#f9f9f9",
                  width: "fit-content",
                  fontSize: 14,
                }}
              >
                {!visibleAbout ? (
                  <span>
                    View Project Details <KeyboardArrowDown />
                  </span>
                ) : (
                  <span>
                    Hide Project Details <KeyboardArrowUp />
                  </span>
                )}
              </Button>
            </Box>
          </Box>
        </Box>
        {visibleAbout && (
          <Container className="mt-5">
            <Box className={classes.aboutCard}>
              <Box mb={1}>
                <Typography
                  mb={2}
                  variant="h6"
                  textAlign="left"
                  fontSize={20}
                  fontWeight={600}
                  ml={1}
                  color="#f9f9f9"
                >
                  About Project
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.description}
                  textAlign="center"
                  fontWeight={400}
                  color="#919191"
                  ml={1}
                >
                  Welcome to The Metaverse - a new era where the real meets the
                  virtual. Not only delivering the best 3D-game experience, FOTA
                  also empowers its players to roleplay and make their
                  characters exclusively theirs in this fantasy world.
                </Typography>

                <Box display={"flex"} justifyContent="flex-start" mt={2}>
                  <IconButton>
                    <Twitter style={{ color: "#7825D5" }} />
                  </IconButton>{" "}
                  <IconButton>
                    <Telegram style={{ color: "#7825D5" }} />
                  </IconButton>
                  <IconButton>
                    <LinkedIn style={{ color: "#7825D5" }} />
                  </IconButton>
                  <IconButton>
                    <Mail style={{ color: "#7825D5" }} />
                  </IconButton>
                </Box>
                <Grid container display={"flex"} justifyContent="center" mt={1}>
                  <Grid item md={6}>
                    <Typography
                      mb={2}
                      variant="h6"
                      textAlign="left"
                      fontSize={20}
                      fontWeight={600}
                      ml={1}
                      color="#7825D5"
                    >
                      Rules
                    </Typography>

                    <ul>
                      <li className={classes.li}>
                        All NFT holders will get access to premium characters.
                      </li>
                      <li className={classes.li}>
                        All NFT holders will receive 15000 FOTA on 15th July,
                        2023.
                      </li>
                      <li className={classes.li}>
                        All NFT holders will get access to premium characters.
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={6}>
                    {" "}
                    <Typography
                      mb={1}
                      variant="h6"
                      textAlign="left"
                      fontSize={20}
                      fontWeight={600}
                      ml={1}
                      color="#7825D5"
                    >
                      NFT Utilities
                    </Typography>
                    <Typography
                      mb={1}
                      variant="body2"
                      textAlign="left"
                      fontSize={14}
                      fontWeight={400}
                      ml={1}
                      color="#f9f9f9"
                    >
                      Why you should hold these NFTs
                    </Typography>
                    <ul>
                      <li className={classes.li}>
                        All NFT holders will get access to premium characters.
                      </li>
                      <li className={classes.li}>
                        All NFT holders will receive 15000 FOTA on 15th July,
                        2023.
                      </li>
                      <li className={classes.li}>
                        All NFT holders will get access to premium characters.
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        )}
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Container className="mt-5">
            <Typography
              variant="h6"
              color={"#f9f9f9"}
              textAlign="left"
              fontWeight={600}
              fontSize={24}
            >
              NFTs on sale
            </Typography>
            <Grid container display={"flex"} justifyContent="start">
              <Grid item md={4}>
                <NFTCard />
              </Grid>
              <Grid item md={4}>
                <NFTCard />
              </Grid>
              <Grid item md={4}>
                <NFTCard />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
