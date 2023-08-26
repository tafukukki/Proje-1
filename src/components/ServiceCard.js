import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import Typography from "@mui/joy/Typography";

function ServiceCard({ title, imageUrl, description }) {
  return (
    <Box sx={{ minHeight: "600px", width: "100%", mt: 5 }}>
      <Card
        sx={(theme) => ({
          margin: "0 auto",

          borderRadius: `10px`,
          //   maxWidth: "300px",
          height: `495px`,
          width: "400px",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
            mt: 2,
          }}
        >
          <Typography
            fontSize="24px"
            level="title-lg"
            sx={{
              marginLeft: `35px`,
              marginTop: "30px",
              
              textAlign: "left",
            }}
          >
            {title.split("|").map((segment, index) => (
              <React.Fragment key={index}>
                {segment}
                {index !== title.split("|").length - 1 && <br />}
              </React.Fragment>
            ))}
          </Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Typography
            fontSize="16px"
            level="title-lg"
            sx={{
              textAlign: "left",
              color: "#231f1e",
              
              marginLeft: `20px`,
            }}
          >
            {"Updates on safe Shopping"}
            <br />
            {"in our Stores"}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: 400, // Add a specific height for testing purposes

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default ServiceCard;
