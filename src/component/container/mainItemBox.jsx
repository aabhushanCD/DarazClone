import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MainItemBox({ data }) {
  return (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={3}
      sx={{ margin: "auto", width: "100%", justifyContent: "center" }}
    >
      {data.map((item, index) => (
        <Grid
          item
          xs={5}
          sm={5}
          md={4}
          lg={3}
          sx={{ padding: "0px" }}
          key={index}
        >
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={item.Image}
              alt={item.Name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.Name}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                <Typography variant="h6" color="error">
                  {item.Price}
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {item.OriginalPrice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.Discount}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainItemBox;
