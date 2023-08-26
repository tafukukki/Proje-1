import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const pages = ["Category", "Deals", "Whats new", "Delivery"];

export default function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
              alt="Solo Logo"
            />
          </IconButton>

          <Stack direction="row" spacing={2} alignItems="center">
            {pages.map((page) => (
              <Button
                key={page}
                style={{ color: "black" }}
                onClick={() => console.log(`${page} clicked!`)}
              >
                {page}
              </Button>
            ))}
          </Stack>

          <TextField
            id="search"
            type="search"
            label="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: 600,
              marginLeft: "150px",
              "& .MuiInputLabel-root": {
                // Center the label
                top: "50%",
                transform: "translate(0, -50%)",
                marginLeft: "30px", // Adjust as needed
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                width: `20rem`,
                height: `40px`,
                justifyContent: "center",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Stack direction="row" spacing={2}>
            <Button
              startIcon={
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png"
                  alt="Account Icon"
                />
              }
              style={{ color: "black" }}
            >
              Account
            </Button>
            <Button
              startIcon={
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png"
                  alt="Cart Icon"
                />
              }
              style={{ color: "black" }}
            >
              Cart
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        textAlign="left"
        px={3}
        width="40%"
        marginTop="10em"
        marginLeft="6em"
      >
        <h1
          style={{
            marginTop: "0px",
            fontFamily: "Eina02, sans-serif",
            fontSize: "64px",
            lineHeight: "74px",
            fontWeight: "700",
            color: `#003d29`,
            marginLeft: "100px",
          }}
        >
          Shopping and Department Store
        </h1>
        <p
          style={{
            marginBottom: "30px",
            fontFamily: "Inter, sans-serif",
            color: "#231f1e",
            fontSize: "20px",
            lineHeight: "145%",
            marginLeft: "100px",
          }}
        >
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#003d29",
            borderRadius: "25px",
            color: "white",
            padding: "12px 36px",
            textTransform: "none",
            marginLeft: "100px",
          }}
        >
          Learn More
        </Button>
      </Box>
    </div>
  );
}
