import { Data } from '../getData/getData.tsx';
import { Link } from 'react-router-dom';

type FeatureProductProps = {
  data: Data;
};

export function FeatureProduct({ data }: FeatureProductProps) {
  let image = data.imageUrl;
  if (!image) {
    image = 'https://placehold.co/600x400?text=Missing+Image'
  }
  return (
    <Link to={`product/${data.id}`} className="mb-8 w-72 flex flex-col">
      <div className="h-72 w-full pb-3">
        <img src={image} alt="" />
      </div>
      <h3 className="text-primary font-heading text-lg uppercase font-semibold">{data.title}</h3>
      {data.description && <p className="flex-1">{data.description}</p>}
      {data.discountedPrice ? (
        <p className="mt-5 font-heading font-semibold text-2xl text-primary text-right">
          <span className="mr-3 text-red-600 line-through text-lg">{data.price},-</span>
          <span>{data.discountedPrice},-</span>
        </p>
      ) : (
        <p className="mt-5 font-heading font-semibold text-2xl text-primary text-right">{data.price},-</p>
      )}
    </Link>
  )
}

export default FeatureProduct;