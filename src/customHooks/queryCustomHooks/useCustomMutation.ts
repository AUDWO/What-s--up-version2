import {
  useMutation,
  useQueryClient,
  MutationFunction,
  MutationKey,
} from "@tanstack/react-query";

const useCustomMutation = <TData, TVariables = undefined>(
  queryFn: MutationFunction<TData, TVariables>,
  queryKeyArr: MutationKey[],
  callback: (data?: TData) => void
) => {
  const queryClient = useQueryClient();

  const mutationObj = useMutation({
    mutationFn: queryFn,
    onSuccess: (data) => {
      if (queryKeyArr.length) {
        queryKeyArr.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }
      if (callback) {
        callback(data);
      }
    },
  });

  return mutationObj;
};

export default useCustomMutation;
