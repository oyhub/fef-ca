import GetData, { Data } from '../components/api/getData/getData.tsx';
import { BASE_URL } from '../constants/Constants.tsx';
import { useParams } from 'react-router-dom';

export function Product() {
  const { id } = useParams()
  const url = BASE_URL + '/' + id;
  const { data, loading, error } = GetData(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log()

  return null
}

export default Product;