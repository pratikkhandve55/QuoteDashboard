import DescriptionIcon from "@mui/icons-material/Description";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { Box } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";

function SummaryCards({ quotes = [] }) {
  const totalRequests = quotes.length;

  const highPriority = quotes.filter(
    (quote) => quote.priority === "High"
  ).length;

  const needsInfo = quotes.filter(
    (quote) => quote.status === "Needs Info"
  ).length;

  const totalValue = quotes.reduce(
    (sum, quote) => sum + quote.estimated_value,
    0
  );
  const cards = [
  {
    title: "Total Requests",
    value: totalRequests,
    icon: <DescriptionIcon fontSize="large" />,
    color: "#1976d2",
  },
  {
    title: "High Priority",
    value: highPriority,
    icon: <PriorityHighIcon fontSize="large" />,
    color: "#d32f2f",
  },
  {
    title: "Needs Info",
    value: needsInfo,
    icon: <InfoIcon fontSize="large" />,
    color: "#ed6c02",
  },
  {
    title: "Estimated Value",
    value: `$${totalValue.toLocaleString()}`,
    icon: <AttachMoneyIcon fontSize="large" />,
    color: "#2e7d32",
  },
];

  return (
  <Box
    sx={{
      display: "flex",
      gap: 3,
      flexWrap: "wrap",
      mb: 3,
    }}
  >
    {cards.map((card) => (
      <Card
        key={card.title}
        sx={{
          minWidth: 240,
          flex: 1,
          borderRadius: 3,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 8,
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {card.title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {card.value}
              </Typography>
            </Box>

            <Box
              sx={{
                color: card.color,
              }}
            >
              {card.icon}
            </Box>
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
);
}

export default SummaryCards;