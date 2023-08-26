import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function Trends({ title, description, imageUrl }) {
  return (
    <Box sx={{ 
      minHeight: 540, 
      mt: 5,
      margin: "auto",
      minWidth: "600px"

      
      }}>
      <Card
        sx={(theme) => ({
          width: "100%",
          maxWidth: "1200px",
          flexDirection: "column",
          overflow: "hidden",
          
          backgroundColor: "#f7f7f7",

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
        <Box sx={{ position: "relative", height: '70%' }}>
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            marginLeft: "20px",
          }}
        >
          <Typography level="title-lg" sx={{ fontSize: '1.6rem' }}>{title}</Typography>
        </Box>
        <Typography
          level="body-sm"
          sx={{
            mt: 1,
            fontSize: '0.9rem',  // Increased font size
            textAlign: "left",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          {description || "Delivery within 24 hours"}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 2,
            px: 4,  // Increased padding for the button
            py: 2,
            borderRadius: "25px",
            fontSize: "1.1rem",  // Slightly larger font for the button
            margin: "0 0 10px 20px",
            backgroundColor: "black",
            color: "white",
            alignSelf: "flex-start",
            transition:
              "background-color 0.2s ease-in, borderColor 0.5s ease-in",
            "&:hover": {
              color: `white`,
              backgroundColor: "#003d29",
              borderColor: "#003d29",
            },
          }}
        >
          Shop Now
        </Button>
      </Card>
    </Box>
  );
}
