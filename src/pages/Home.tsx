import FeatureProducts from '../components/api/featureProducts/FeatureProducts.tsx';
import ShowProducts from '../components/api/showProducts/ShowProducts.tsx';

export function Home() {
  return (
    <>
      <FeatureProducts />

      <ShowProducts />
    </>
  );
}

export default Home;