import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const descriptionRec = "Delivery with in 24 hours";

function RectangleContainer({ title, imageUrl }) {
  return (
    <Box
      sx={{
        width: "250px",
        height: "70px",
        backgroundColor: `#f7f7f7`,
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: `5%`,
        border: "1px solid transparent",
        transition: "transform 0.3s ease-in-out, borderColor 0.3s ease-in-out",
        "&:hover": {
          borderColor: "gray",
        },
      }}
    >
      <img
        src={imageUrl}
        alt="logo"
        sx={{
          width: "70px",
          height: "70px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.15)",
          },
        }}
      />
      <Box
        sxsx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          fontSize="18px "
          textAlign="left"
          component="div"
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {descriptionRec}
        </Typography>
      </Box>
    </Box>
  );
}

export default RectangleContainer;
