import useCartStore from '../store/CartStore.tsx';
import { Link } from 'react-router-dom';

export function Success() {
  const clearCart = useCartStore(state => state.clearCart);
  clearCart();

  return (
    <div className="">
      <h1 className="font-heading font-semibold text-primary text-2xl mb-1">Thank You for Your Purchase!</h1>
      <p>Your order has been processed successfully. You will soon receive a confirmation email with the details.</p>

      <div className="mb-10 mt-5">
        <h2 className="font-heading font-semibold text-primary text-xl mb-1">Order Details</h2>
        <p>Order Number: #123456</p>
        <p>Estimated Delivery Date: 1 week</p>
      </div>

      <div>
        <Link to="/" className="bg-primary text-white px-5 py-3 rounded uppercase font-semibold mb-8 xs:mb-0 hover:bg-secondary hover:underline">Continue Shopping</Link>
      </div>
    </div>
  )
}

export default Success;