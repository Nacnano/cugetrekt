import { useEffect, useState } from "react";
import { api } from "../utils/axios";
import { DocumentDto } from "../types/dto";
import { comp } from "./test";

const useDocumentList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [documents, setDocuments] = useState<DocumentDto[]>([]);
  const fetchContents = async () => {
    try {
      const res = await api.get("/MyDocuments");
      let arr = res.data;
      arr.sort(function (a: any, b: any) {
        return comp(a.lastEdit, b.lastEdit);
      });
      setDocuments(arr);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContents();
  }, []);

  return { loading, error, documents };
};

export default useDocumentList;
