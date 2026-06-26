
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
  Divider,
  Chip,
  Box,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useUpdateQuote } from "../hooks/useUpdateQuote";
import { useSelector } from "react-redux";
import Notification from "./Notification";

function DetailsPanel() {
  const quote = useSelector(
    (state) => state.filters.selectedQuote
  );
  const [selectedStatus, setSelectedStatus] = useState("");

const mutation = useUpdateQuote();
const [open, setOpen] = useState(false);

useEffect(() => {
  if (quote) {
    setSelectedStatus(quote.status);
  }
}, [quote]);

  if (!quote) {
      return (
        <Card
          sx={{
            height: "100%",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ mt: 5 }}
            >
              📄
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
            >
              Select a quote to view details.
            </Typography>
          </CardContent>
        </Card>
      );
  }
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
  return (
    <Card sx={{ mt: 3 }}>
  <CardContent>

    <Typography variant="h5" gutterBottom>
      Quote Details
    </Typography>

    <Typography>
      <strong>Customer:</strong> {quote.customer}
    </Typography>

    <Typography>
      <strong>Project:</strong> {quote.project}
    </Typography>

    <Typography>
      <strong>Priority:</strong> {quote.priority}
    </Typography>

    <Typography>
      <strong>Estimated Value:</strong> $
      {quote.estimated_value.toLocaleString()}
    </Typography>

    <Stack spacing={2} sx={{ mt: 3 }}>

      <TextField
        select
        label="Status"
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
      >
        <MenuItem value="New">New</MenuItem>
        <MenuItem value="In Review">
          In Review
        </MenuItem>
        <MenuItem value="Needs Info">
          Needs Info
        </MenuItem>
        <MenuItem value="Waiting for Customer">
          Waiting for Customer
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        disabled={mutation.isPending}
        onClick={() => {
          mutation.mutate(
            {
              id: quote.id,
              status: selectedStatus,
            },
            {
              onSuccess: () => {
                setOpen(true);
              },
            }
          );
        }}
      >
        {mutation.isPending ? "Updating..." : "Update Status"}
      </Button>

    </Stack>

  </CardContent>
  <Notification
      open={open}
      severity="success"
      message="Quote status updated successfully!"
      onClose={() => setOpen(false)}
    />
</Card>
  );
}

export default DetailsPanel;