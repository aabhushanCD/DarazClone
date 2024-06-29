import MainItemBox from "./mainItemBox";
import data from "./data_justForYou.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function JustForYou() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          width: "1133px",
          margin: "auto",
          padding: "10px",
        }}
      >
        <Typography variant="h5">Just For You</Typography>
        <MainItemBox data={data}></MainItemBox>
      </Box>
    </>
  );
}

export default JustForYou;
