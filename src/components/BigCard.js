import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import Typography from "@mui/joy/Typography";

function BigCard({ title, imageUrl, description }) {
  return (
    <Box sx={{ minHeight: "600px", width: "90%", mt: 5 }}>
      <Card
        sx={(theme) => ({
          margin: "0 auto",
          borderRadius: `10px`,
          //   maxWidth: "300px",
          height: `465px`,
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          backgroundColor: `#F2E4D8`,
          p: 0,
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
            "& img": {
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.15)",
              },
            },
          },
        })}
      >
        <Box sx={{ padding: 2 }}>
          <Typography
            fontSize="22px"
            level="body-sm"
            sx={{
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              color: `black`,
              margin: `10px 0 10px 10px`,
            }}
          >
            Save
          </Typography>
          <Typography
            fontSize="52px"
            level="title-md"
            sx={{
              textAlign: "left",
              fontFamily: "Eina04, sans-serif",
              color: "#cb9917",
              fontSize: "52px",
              lineHeight: "52px",
              fontWeight: "700",
              margin: `0 0 20px 10px`,
            }}
          >
            <sup style={{ fontSize: "30px" }}>$</sup>100
          </Typography>
          <Typography
            fontSize="16px"
            level="title-lg"
            sx={{
              textAlign: "left",
              color: "#231f1e",
              marginLeft: `10px`,
            }}
          >
            {description || "Explore Our Furniture & Home Furnishing Range"}
          </Typography>
        </Box>

        <Box sx={{ width: "100%", backgroundColor: "red" }}>
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", display: "block" }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default BigCard;
