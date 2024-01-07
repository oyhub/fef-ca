import useCartStore from '../store/CartStore.tsx';
import { RemoveCircleOutline } from '@mui/icons-material';
import { Data } from '../components/api/getData/getData.tsx';
import { Link } from 'react-router-dom';

export function Checkout() {
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const amount = 1;

  const handleRemoveClick = (product: Data) => () => removeFromCart(product);

  const totalSum = cart.reduce((acc, product) => {
    const priceToUse = product.discountedPrice ? product.discountedPrice : product.price;
    return acc + priceToUse;
  }, 0);


  return (
    <div>
      <h1 className="font-heading font-semibold text-xl text-primary mb-8">Shopping cart</h1>
      <div className="flex flex-col gap-6">
        {cart.length === 0 ? (
          <div>
            <p className="mb-8">Cart is empty. Come see what we have to offer.</p>
            <Link to="/" className="bg-primary text-white px-5 py-3 rounded uppercase font-semibold mb-8 xs:mb-0 hover:bg-secondary hover:underline">shop now</Link>
          </div>
        ) : (
          cart.map((product, index) => (
          <div key={index} className="grid grid-cols-2 sm:grid-cols-[1fr_2fr_3fr] md:grid-cols-[1fr_2fr_2fr] xl:grid-cols-[1fr_4fr_2fr] gap-6 border-b-4 pb-3">
            <img src={product.imageUrl} alt="" className="object-cover max-h-40 aspect-square xl:w-40"/>
            <div>
              <Link to={`/product/${product.id}`} className="hover:underline"><h2 className="font-heading text-lg text-primary">{product.title}</h2></Link>
              <p>{product.description}</p>
            </div>
            <div className="flex gap-3 col-span-2 sm:col-span-1 sm:justify-between">
              <div className="flex flex-col gap-2">
                <span>Amount</span>
                <span>1</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Price</span>
                {product.discountedPrice && <span>{product.discountedPrice},-</span>}
                <span className={product.discountedPrice ? 'line-through text-red-600 text-sm' : ''}>{product.price},-</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Total</span>
                <span className="font-semibold text-primary">{product.discountedPrice ? (product.discountedPrice * amount) : (product.price * amount)},-</span>
              </div>
              <button onClick={handleRemoveClick(product)} className="self-start"><RemoveCircleOutline sx={{ color: '#dc2626' }} /></button>
            </div>
          </div>
        )))}
        {cart.length > 0 && (
          <div className="self-end pr-3 flex flex-col justify-center gap-4">
            <p>Total sum: <span className="font-semibold text-primary">{totalSum.toFixed(2)},-</span></p>
            <Link to="/success" className="text-center bg-primary text-white px-5 py-3 rounded uppercase font-semibold mb-8 xs:mb-0 hover:bg-secondary hover:underline">Checkout</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout;