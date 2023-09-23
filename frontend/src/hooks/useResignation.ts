import { useEffect, useState } from "react";
import { api } from "../utils/axios";

const useResignation = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await api.get(`/mydocuments/resignation/${id}`);
        setInfo(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchContents();
  });

  return { loading, error, info };
};

export default useResignation;
