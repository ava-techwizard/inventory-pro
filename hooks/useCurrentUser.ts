import { ENDPOINT } from "@/constants/endpoints";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(ENDPOINT.ME, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    // revalidateOnReconnect: false,
  });

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
