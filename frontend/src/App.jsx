import Dashboard from "./pages/Dashboard";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <Dashboard />
    </Box>
  );
}

export default App;