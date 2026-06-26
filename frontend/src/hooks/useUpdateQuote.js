import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuoteStatus } from "../api/quoteApi";

export const useUpdateQuote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateQuoteStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });

    },

    onError: (error) => {
      console.error(error);
    },
  });
};