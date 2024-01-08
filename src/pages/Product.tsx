import GetData from '../components/api/getData/getData.tsx';
import { BASE_URL } from '../constants/Constants.tsx';
import { Link, useParams } from 'react-router-dom';
import ShowReviews from '../components/showReviews/showReviews.tsx';
import { ArrowBack } from '@mui/icons-material';
import useCartStore from '../store/CartStore.tsx';
import useDocumentTitle from '../components/hooks/useDocumentTitle.tsx';

export function Product() {
  useDocumentTitle('Linnus Fritid');
  const { id } = useParams()
  const url = BASE_URL + '/' + id;
  const { data, loading, error } = GetData(url);

  const addToCart = useCartStore(state => state.addToCart);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  if (!Array.isArray(data)) {
    const handleAddToCart = () => addToCart(data);
    const reviews = data.reviews ? data.reviews : [];
    document.title = `${data.title} | Linnus Fritid`;

    return (
      <>
        <Link to="/" className="block mb-2 hover:underline"><ArrowBack fontSize="small"/> Back</Link>
        <div className="grid gap-10 md:grid-cols-2">
          <img src={data.imageUrl} alt="" className="aspect-square rounded" />
          <div>
            <h1 className="font-heading font-semibold text-2xl text-primary uppercase">{data.title}</h1>
            <div className="xs:flex xs:justify-between align-middle xs:mb-5 md:block">
              {data.discountedPrice ? (
                <p className="font-heading font-semibold text-2xl text-primary my-3 xs:m-auto xs:ml-0 md:my-3">
                  <span className="mr-3 text-red-600 line-through text-lg">{data.price},-</span>
                  <span>{data.discountedPrice},-</span>
                </p>
              ) : (
                <p className="font-heading font-semibold text-2xl">{data.price},-</p>
              )}
              <button onClick={handleAddToCart} className="bg-primary text-white px-5 py-3 rounded uppercase font-semibold mb-8 xs:mb-0 hover:bg-secondary hover:underline">Add to cart</button>
            </div>
            <p>{data.description}</p>
            <ShowReviews reviews={reviews} />
          </div>
        </div>
      </>
    );
  } else {
    return <div>An error occurred, please try again later.</div>;
  }
}

export default Product;