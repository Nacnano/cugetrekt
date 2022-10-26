import { useEffect, useState } from 'react';
import { api } from '../utils/axios';
import { DocumentDto } from '../types/dto';

const useDocumentList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [documents, setDocuments] = useState<DocumentDto[]>([]);
const fetchContents = async () => {
      try {
        const res = await api.get('/MyDocuments');
        setDocuments(res.data);
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
