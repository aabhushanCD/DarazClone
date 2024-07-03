import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram, YouTube, Language } from "@mui/icons-material";
import Footers from "./footers";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "40px 20px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Customer Care
            </Typography>
            <Link href="#" color="inherit">
              Help Center
            </Link>
            <br />
            <Link href="#" color="inherit">
              How to Buy
            </Link>
            <br />
            <Link href="#" color="inherit">
              Returns & Refunds
            </Link>
            <br />
            <Link href="#" color="inherit">
              Contact Us
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Daraz
            </Typography>
            <Link href="#" color="inherit">
              About Daraz
            </Link>
            <br />
            <Link href="#" color="inherit">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit">
              Daraz Blog
            </Link>
            <br />
            <Link href="#" color="inherit">
              Terms & Conditions
            </Link>
            <br />
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="inherit">
              Digital Payments
            </Link>
            <br />
            <Link href="#" color="inherit">
              Daraz Customer University
            </Link>
            <br />
            <Link href="#" color="inherit">
              Daraz Affiliate Program
            </Link>
            <br />
            <Link href="#" color="inherit">
              Review & Win
            </Link>
            <br />
            <Link href="#" color="inherit">
              Meet the winners
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Daraz International
            </Typography>
            <Link href="#" color="inherit">
              Pakistan
            </Link>
            <br />
            <Link href="#" color="inherit">
              Bangladesh
            </Link>
            <br />
            <Link href="#" color="inherit">
              Sri Lanka
            </Link>
            <br />
            <Link href="#" color="inherit">
              Myanmar
            </Link>
            <br />
            <Link href="#" color="inherit">
              Nepal
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ padding: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Earn with Daraz
            </Typography>
            <Link href="#" color="inherit">
              Daraz University
            </Link>
            <br />
            <Link href="#" color="inherit">
              Sell on Daraz
            </Link>
            <br />
            <Link href="#" color="inherit">
              Code of Conduct
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", margin: "40px 0" }}>
        <Typography variant="h6" gutterBottom>
          Exclusive Deals and Offers!
        </Typography>
        <Box sx={{ marginBottom: "20px" }}>
          <img
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png"
            alt="QR Code"
            style={{ width: "100px" }}
          />
          <br />
          <img
            src="path/to/app-store.png"
            alt="App Store"
            style={{ width: "150px", margin: "10px" }}
          />
          <img
            src="path/to/google-play.png"
            alt="Google Play"
            style={{ width: "150px", margin: "10px" }}
          />
          <img
            src="path/to/app-gallery.png"
            alt="App Gallery"
            style={{ width: "150px", margin: "10px" }}
          />
        </Box>
        <Typography variant="h6">Happy Shopping</Typography>
      </Box>
      <Box sx={{ textAlign: "center", margin: "40px 0" }}>
        <Typography variant="h6">Follow Us</Typography>
        <Box>
          <Facebook style={{ margin: "0 10px" }} />
          <Instagram style={{ margin: "0 10px" }} />
          <YouTube style={{ margin: "0 10px" }} />
          <Language style={{ margin: "0 10px" }} />
        </Box>
      </Box>
      <Footers></Footers>
    </Box>

  );
};

export default Footer;
