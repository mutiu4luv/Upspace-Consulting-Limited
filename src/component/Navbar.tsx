import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundImage: "url('https://picsum.photos/1200/200')", // 🔹 Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff", // ensures text is readable
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)", // 🔹 improves readability on images
          }}
        >
          Upspace Consulting Limited
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
