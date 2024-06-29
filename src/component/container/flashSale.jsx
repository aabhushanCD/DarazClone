import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import MainItemBox from "../container/mainItemBox";
import data from "./data_FlashSale.json";
function Timer() {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const randomTime = generateRandomTime();
    setTime(randomTime);
    const interval = setInterval(() => {
      setTime((prevTime) => decrementTime(prevTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function generateRandomTime() {
    let hour = Math.floor(Math.random() * 12);
    let minute = Math.floor(Math.random() * 60);
    let second = Math.floor(Math.random() * 60);

    return { hour, minute, second };
  }

  function decrementTime(time) {
    let { hour, minute, second } = time;

    if (second > 0) {
      second -= 1;
    } else {
      if (minute > 0) {
        minute -= 1;
        second = 59;
      } else {
        if (hour > 0) {
          hour -= 1;
          minute = 59;
          second = 59;
        }
      }
    }

    return { hour, minute, second };
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ padding: "0 4px" }}>{String(time.hour).padStart(2, "0")}:</Box>
      <Box sx={{ padding: "0 4px" }}>
        {String(time.minute).padStart(2, "0")}:
      </Box>
      <Box sx={{ padding: "0 4px" }}>
        {String(time.second).padStart(2, "0")}
      </Box>
    </Box>
  );
}

function Flashsale() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "1133px",
          marginLeft: "120px",
          background: "white",
        }}
      >
        <Typography variant="h5">Flash Sale</Typography>
        <Box
          sx={{
            height: "3rem",
            display: "flex",
            mt: 2,
          }}
        >
          <Button variant="text" sx={{ color: "orange" }}>
            On Sell Now
          </Button>
          <Button variant="text" sx={{ color: "black", marginLeft: "82px" }}>
            Ending in
          </Button>
          <Timer></Timer>
        </Box>
        <MainItemBox data={data} />
      </Box>
    </>
  );
}

export default Flashsale;
