import FeatureProducts from '../components/api/featureProducts/FeatureProducts.tsx';
import ShowProducts from '../components/api/showProducts/ShowProducts.tsx';
import useDocumentTitle from '../components/hooks/useDocumentTitle.tsx';

export function Home() {
  useDocumentTitle('Linnus Fritid')
  return (
    <>
      <FeatureProducts />

      <ShowProducts />
    </>
  );
}

export default Home;