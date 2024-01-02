import { Data } from '../getData/getData.tsx';
import { Link } from 'react-router-dom';

type ProductData = {
  data: Data;
}

export function ShowProduct({ data }: ProductData) {
  let image = data.imageUrl;
  if (!image) {
    image = 'https://placehold.co/600x400?text=Missing+Image'
  }
  console.log(data.tags)
  return (
    <Link to={`product/${data.id}`} className="w-full flex flex-col text-white bg-primary p-2 group hover:bg-secondary">
      <div className="h-72 pb-3 m-2">
        <img src={image} alt="" />
      </div>
      <h3 className="font-heading text-lg uppercase font-semibold mb-5 group-hover:underline">{data.title}</h3>
      {data.description && <p className="flex-1">{data.description}</p>}
      {data.discountedPrice ? (
        <p className="mt-5 font-heading font-semibold text-2xl text-right">
          <span className="mr-3 text-red-300 line-through text-lg">{data.price},-</span>
          <span>{data.discountedPrice},-</span>
        </p>
      ) : (
        <p className="mt-5 font-heading font-semibold text-2xl text-right">{data.price},-</p>
      )}
    </Link>
  )
}

export default ShowProduct;