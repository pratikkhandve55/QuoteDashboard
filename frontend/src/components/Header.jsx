import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            📊 Quote Request Dashboard
          </Typography>

          <Typography variant="body2">
            Manage and Track Customer Quote Requests
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;