import React from "react";
import Box from "@mui/material/Box";

function VerticalBox({ title, imageUrl }) {
  return (
    <Box
      sx={{
        width: "200px",
        height: "257px",
        borderRadius: "10px",
        position: "relative",
        display: "inline-block",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "red",
        overflow: "hidden", 
        margin: "8px",
        "& img": {
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.30)",
          },
        },
      }}
    >
      <h3
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          zIndex: 1,
          marginTop: `10px`,
          fontFamily: "Inter, sans-serif",
          fontSize: "21px",
        }}
      >
        {title}
      </h3>
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          zIndex: 0,
          borderRadius: "10px",
        }}
      />
    </Box>
  );
}

export default VerticalBox;
