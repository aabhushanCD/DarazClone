import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, Typography } from "@mui/material";
import { FaGlobe } from "react-icons/fa";
import logo from "../../image/darazLogo.png";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "#f85606",
          position: "static",
          top: 0,
          alignItems: "center",
          height: "5rem",
          color: "white",
          position:"sticky",
          zIndex:"1"
        }}
      >
        <Box sx={{ display: "flex", gap: 2, marginLeft: "81px" }}>
          <Box>
            <img src={logo} alt="" width={120} height={48} />
          </Box>
          <Button sx={{ color: "white", fontSize: "0.7rem" }}>Category</Button>
        </Box>
        <Box>
          <TextField
            id="filled-basic"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),

              disableUnderline: true,
            }}
            sx={{
              marginLeft: "26px",
              background: "white",
              borderRadius: 4,
              width: "646px",
              height: "2.5rem",
              border: "none",
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "300px",
            }}
          >
            <Button>
              <PersonIcon sx={{ color: "white" }} />
              <Typography color="white" sx={{ fontSize: "0.7rem" }}>
                {" "}
                Login
              </Typography>
            </Button>
            <Typography color="white">|</Typography>
            <Button>
              <Typography color="white" sx={{ fontSize: "0.7rem" }}>
                {" "}
                Sign Up{" "}
              </Typography>
            </Button>
            <Button>
              <FaGlobe color="white" />
            </Button>
            <Button sx={{ width: "30px", height: "30px" }}>
              <FaShoppingCart />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
