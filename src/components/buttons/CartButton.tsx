import { ShoppingCartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/CartStore.tsx';

export function CartButton() {
  const count = useCartStore(state => state.count);

  return (
    <div className="relative">
      <div className={`${count ? "block" : "hidden"} absolute top-1 -right-2 w-5 h-5 rounded-3xl font-semibold font-heading text-2xs text-primary bg-amber-500 grid place-items-center`}
      >{count}</div>
      <Link to="/checkout" className="relative text-3xl p-1 mr-1 text-gray-500 hover:text-primary">
        <ShoppingCartRounded fontSize="inherit" />
      </Link>
    </div>
  )
}

export default CartButton;