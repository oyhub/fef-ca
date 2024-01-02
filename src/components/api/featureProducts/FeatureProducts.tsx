import GetData from '../getData/getData.tsx';
import { BASE_URL } from '../../../constants/Constants.tsx';
import FeatureProduct from './FeatureProduct.tsx';

export function FeatureProducts() {
  const { data, loading, error } = GetData(BASE_URL, 3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (Array.isArray(data)) return (
    <div>
      <h2 className="font-heading font-semibold text-primary text-2xl pb-3">Featured Products</h2>
      <div className="flex flex-wrap gap-5 justify-between max-w-7xl mx-auto">
        {data && data.map(product => (
          <FeatureProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default FeatureProducts;