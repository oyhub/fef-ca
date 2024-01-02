import GetData from '../components/api/getData/getData.tsx';
import { BASE_URL } from '../constants/Constants.tsx';
import { useParams } from 'react-router-dom';
import ShowReviews from '../components/showReviews/showReviews.tsx';

export function Product() {
  const { id } = useParams()
  const url = BASE_URL + '/' + id;
  const { data, loading, error } = GetData(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  if (!Array.isArray(data)) {

    const reviews = data.reviews ? data.reviews : [];
    return (
      <div className="grid md:grid-cols-2">
        <img src={data.imageUrl} alt="" />
        <div>
          <h1>{data.title}</h1>
          {data.discountedPrice ? (
            <p className="mt-5 font-heading font-semibold text-2xl">
              <span className="mr-3 text-red-300 line-through text-lg">{data.price},-</span>
              <span>{data.discountedPrice},-</span>
            </p>
          ) : (
            <p className="mt-5 font-heading font-semibold text-2xl">{data.price},-</p>
          )}
          <button>Add to cart</button>
          <p>{data.description}</p>
          <ShowReviews reviews={reviews} />
        </div>
      </div>
    );
  } else {
    return <div>An error occurred, please try again later.</div>;
  }
}

export default Product;