import useDocumentList from '../hooks/useDocumentList'
import DocumentCard from './DocumentCard'
import Loading from './Loading';
import Error from './Error';

import { useAuth } from '../Providers/AuthProvider';

export default function DocumentList() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Error message='Please Login First' />
  // const { loading, error, documents } = useDocumentList()
  // if (loading) return <Loading />;
  // if (error) return <Error />;

  // FORDEV
  let documents = [
    { "id": 1, "docType": 0, "name": "Withdraw01", "day": 20, "month": 10, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 2, "docType": 1, "name": "Resign01", "day": 2, "month": 10, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 3, "docType": 0, "name": "WithWithEz", "day": 1, "month": 8, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 4, "docType": 1, "name": "JustGetOut", "day": 20, "month": 10, "year": 1980, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 5, "docType": 1, "name": "ByeBye", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 6, "docType": 0, "name": "GetRekt", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 7, "docType": 1, "name": "CULater", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
  ];

  return (
    <>
      {documents.map((docs) => (
        <DocumentCard key={docs.id} {...docs} />
      ))}
    </>
  )
}
