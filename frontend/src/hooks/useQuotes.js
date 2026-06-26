import { useQuery } from "@tanstack/react-query";
import { getQuoteRequests } from "../api/quoteApi";

export const useQuotes = () => {
  return useQuery({
    queryKey: ["quotes"],
    queryFn: getQuoteRequests,
  });
};