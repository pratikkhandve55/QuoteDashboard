import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import {
  setStatus,
  setPriority,
  setSearch,
  clearFilters,
} from "../features/filters/filterSlice";

function Filters() {
  const dispatch = useDispatch();

  const { status, priority, search } = useSelector(
    (state) => state.filters
  );

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
      >
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="In Review">In Review</MenuItem>
          <MenuItem value="Needs Info">Needs Info</MenuItem>
          <MenuItem value="Waiting for Customer">
            Waiting for Customer
          </MenuItem>
        </TextField>

        <TextField
          select
          label="Priority"
          value={priority}
          onChange={(e) =>
            dispatch(setPriority(e.target.value))
          }
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </TextField>

        <TextField
          label="Search Customer"
          value={search}
          onChange={(e) =>
            dispatch(setSearch(e.target.value))
          }
          fullWidth
        />

        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(clearFilters())}
        >
          Clear
        </Button>
      </Stack>
    </Paper>
  );
}

export default Filters;