import GetData from '../getData/getData.tsx';
import { BASE_URL } from '../../../constants/Constants.tsx';
import FeatureProduct from './FeatureProduct.tsx';

export function FeatureProducts() {
  const { data, loading, error } = GetData(BASE_URL, 3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  if (data) return (
    <div>
      <h2 className="font-heading font-semibold text-primary text-2xl pb-3">Featured Products</h2>
      <div className="flex flex-wrap gap-5 justify-between">
        {data && data.map(product => (
          <FeatureProduct key={product.id} data={product} />
          // <h3 key={product.id}>{product.title}</h3>
        ))}
      </div>
    </div>
  );
}

export default FeatureProducts;