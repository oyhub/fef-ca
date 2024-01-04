import GetData from '../getData/getData.tsx';
import { BASE_URL } from '../../../constants/Constants.tsx';
import ShowProduct from './ShowProduct.tsx';
import useDataStore from '../../../store/DataStore.tsx';
import { useEffect } from 'react';
import useSearchStore from '../../../store/SearchStore.tsx';

export function ShowProducts() {
  const { data, loading, error } = GetData(BASE_URL);
  const setData = useDataStore((state) => state.setData);
  const searchResults = useSearchStore(state => state.searchResults);
  const searchTerm = useSearchStore(state => state.searchTerm);

  const productsToShow = searchTerm ? searchResults : data;

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setData(data);
    }
  }, [data, setData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (Array.isArray(productsToShow)) return (
    <div className="mb-14">
      <h2 className="font-heading font-semibold text-primary text-2xl pb-3">{searchTerm ? 'Search results' : 'All Products'}</h2>
      {searchTerm && productsToShow.length === 0 && (
        <p>No products found with the search term <span className="font-semibold text-primary">{searchTerm}</span></p>
      )}
      <div className="grid gap-8 justify-center justify-items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsToShow && productsToShow.map(product => (
          <ShowProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default ShowProducts;