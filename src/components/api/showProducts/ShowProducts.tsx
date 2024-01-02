import GetData from '../getData/getData.tsx';
import { BASE_URL } from '../../../constants/Constants.tsx';
import ShowProduct from './ShowProduct.tsx';

export function ShowProducts() {
  const { data, loading, error } = GetData(BASE_URL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (data) return (
    <div className="mb-14">
      <h2 className="font-heading font-semibold text-primary text-2xl pb-3">All Products</h2>
      <div className="grid gap-8 justify-center justify-items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data && data.map(product => (
          <ShowProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default ShowProducts;