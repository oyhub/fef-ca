import { ShoppingCartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function CartButton() {
  const showNumber = true;

  return (
    <div className="relative">
      <div className={`absolute top-1 -right-2 w-5 h-5 rounded-3xl font-semibold font-heading text-2xs text-primary bg-amber-500 grid place-items-center ${showNumber ? "block" : "hidden"}`}>99</div>
      <Link to="/checkout" className="relative text-3xl p-1 mr-1 text-gray-500 hover:text-primary">
        <ShoppingCartRounded fontSize="inherit" />
      </Link>
    </div>
  )
}

export default CartButton;