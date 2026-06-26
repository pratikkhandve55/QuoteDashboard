import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt:5,
        py:2,
        textAlign:"center",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        Quote Dashboard • Built with React, FastAPI &
        Material UI
      </Typography>
    </Box>
  );
}

export default Footer;