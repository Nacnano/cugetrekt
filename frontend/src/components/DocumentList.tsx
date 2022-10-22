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
    { "id": 1, "name": "Withdraw01", "day": 20, "month": 10, "year": 2022 },
    { "id": 2, "name": "Resign01", "day": 2, "month": 10, "year": 2022 },
    { "id": 3, "name": "WithWithEz", "day": 1, "month": 8, "year": 2022 },
    { "id": 4, "name": "JustGetOut", "day": 20, "month": 10, "year": 1980 },
    { "id": 5, "name": "ByeBye", "day": 20, "month": 10, "year": 1999 },
  ];

  return (
    <>
      {documents.map((docs) => (
        <DocumentCard key={docs.id} {...docs} />
      ))}
    </>
  )
}
