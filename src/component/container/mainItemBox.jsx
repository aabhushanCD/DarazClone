import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function MainItemBox() {
  const data = [
    {
      Name: "Ice Roller",
      Image:
        "https://www.befunky.com/images/wp/wp-2017-09-Background-Tool-9.png?auto=avif,webp&format=jpg&width=944",
      Price: "Rs.49",
      OriginalPrice: "Rs.250",
      Discount: "-80%",
    },
    {
      Name: "7 in 1 Cleaner Kit",
      Image:
        "https://img.lovepik.com/free-png/20211230/lovepik-skin-care-products-png-image_401070160_wh860.png",
      Price: "Rs.199",
      OriginalPrice: "Rs.1300",
      Discount: "-84%",
    },
    // Add more items as needed
    {
      Name: "3Pcs Wardrobe Portable",
      Image: "https://pngimg.com/d/shampoo_PNG11.png",
      Price: "Rs.159",
      OriginalPrice: "Rs.4000",
      Discount: "-61%",
    },
    {
      Name: "3Pcs Wardrobe Portable",
      Image:
        "https://www.nicepng.com/png/detail/265-2651001_product-development-services-product-development-png.png",
      Price: "Rs.154",
      OriginalPrice: "Rs.4000",
      Discount: "-61%",
    },
    {
      Name: "3Pcs Wardrobe Portable",
      Image:
        "https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png",
      Price: "Rs.149",
      OriginalPrice: "Rs.4000",
      Discount: "-61%",
    },
  ];

  return (
    <Grid
      container
      columnSpacing={3}
      sx={{ margin: "auto", width: "100%", justifyContent: "center" }}
    >
      {data.map((item, index) => (
        <Grid item xs={5} sm={6} md={4} lg={2} key={index}>
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
