import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
export const getQuoteRequests = async () => {
  const response = await axios.get(
    `${API_URL}/quote-requests`
  );

  return response.data;
};

export const updateQuoteStatus = async ({
  id,
  status,
}) => {
  const response = await axios.post(
    `${API_URL}/quote-requests/${id}/status`,
    { status }
  );

  return response.data;
};