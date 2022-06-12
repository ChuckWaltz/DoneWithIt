import { useState } from "react";

const useApi = (apiFunction: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    if (response.data) setData(response.data);
  };

  return { data, error, loading, refreshing, request };
};

export default useApi;
