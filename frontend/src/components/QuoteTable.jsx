import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedQuote } from "../features/filters/filterSlice";

function QuoteTable({ quotes }) {
  // Redux Hooks
  const dispatch = useDispatch();

  const selectedQuote = useSelector(
    (state) => state.filters.selectedQuote
  );
  const getStatusColor = (status) => {
  switch (status) {
    case "New":
      return "success";

    case "In Review":
      return "warning";

    case "Needs Info":
      return "error";

    case "Waiting for Customer":
      return "info";

    default:
      return "default";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "error";

    case "Medium":
      return "warning";

    case "Low":
      return "success";

    default:
      return "default";
  }
};

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Customer
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Project
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Status
            </TableCell>

            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Priority
            </TableCell>

            <TableCell
              sx={{ color: "white", fontWeight: "bold" }}
              align="right"
            >
              Estimated Value
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {quotes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ py: 5 }}>
                <Typography color="text.secondary">
                  No quote requests found.
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            quotes.map((quote) => (
              <TableRow
                key={quote.id}
                hover
                selected={selectedQuote?.id === quote.id}
                onClick={() => dispatch(setSelectedQuote(quote))}
                sx={{
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <TableCell>{quote.customer}</TableCell>

                <TableCell>{quote.project}</TableCell>

                <TableCell>
                  <Chip
                    label={quote.status}
                    color={getStatusColor(quote.status)}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={quote.priority}
                    color={getPriorityColor(quote.priority)}
                    size="small"
                  />
                </TableCell>

                <TableCell align="right">
                  ${quote.estimated_value.toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default QuoteTable;