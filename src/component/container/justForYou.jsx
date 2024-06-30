import MainItemBox from "./mainItemBox";
import data from "./data_justForYou.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            height: "3rem",
          }}
        >
          <Button
            sx={{
              color: "#f85606",
              border: "1px solid #f85606",
              width: "400px",
            }}
          >
            Load More
          </Button>
        </Box>  
      </Box>
    </>
  );
}

export default JustForYou;
