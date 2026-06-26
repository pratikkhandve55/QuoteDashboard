import { Grid } from "@mui/material";
import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import { useQuotes } from "../hooks/useQuotes";
import QuoteTable from "../components/QuoteTable";
import DetailsPanel from "../components/DetailsPanel";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { CircularProgress, Box } from "@mui/material";
import { Alert } from "@mui/material";
import Footer from "../components/Footer";
function Dashboard() {
  const {
    data: quotes = [],
    isLoading,
    isError,
    error,
  } = useQuotes();
  const { status, priority, search } = useSelector(
  (state) => state.filters
   );
  const filteredQuotes = quotes.filter((quote) => {
  const customer = (quote.customer || "").toLowerCase();
  const project = (quote.project || "").toLowerCase();
  const searchText = (search || "").toLowerCase();

  const matchesStatus =
    status === "All" || quote.status === status;

  const matchesPriority =
    priority === "All" || quote.priority === priority;

  const matchesSearch =
    customer.includes(searchText) ||
    project.includes(searchText);

  return (
    matchesStatus &&
    matchesPriority &&
    matchesSearch
  );
});

  if (isLoading) {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
  }

  if (isError) {
  return (
    <Alert severity="error" sx={{ m: 3 }}>
      Failed to load quote requests.
      <br />
      {error.message}
    </Alert>
  );
  }

  return (
  <>
    <Header />

    <div style={{ padding: "25px" }}>
      <SummaryCards quotes={filteredQuotes} />

      <Filters />

    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <QuoteTable quotes={filteredQuotes} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DetailsPanel />
      </Grid>
    </Grid>
    </div>
  </>
);
}
<Footer />
export default Dashboard;