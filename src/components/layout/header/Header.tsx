import { Link, useLocation } from 'react-router-dom';
import CartButton from '../../buttons/CartButton.tsx';
import SearchInput from '../../searchInput/SearchInput.tsx';
import useDataStore from '../../../store/DataStore.tsx';
import useSearchStore from '../../../store/SearchStore.tsx';

export function Header() {
  const data = useDataStore(state => state.data);
  const setSearchResults = useSearchStore(state => state.setSearchResults);
  const setSearchTerm = useSearchStore(state => state.setSearchTerm);
  const location = useLocation()

  const handleLinkClick = () => {
    setSearchResults([]);
    setSearchTerm("");
  };

return (
  <header className="mb-5">
    <div className="text-xs font-heading uppercase w-screen bg-primary text-white p-2">
      <div className="container px-3 flex justify-end gap-8">
        <Link to="/contact" className="hover:underline">Contact</Link>
        <a className="hover:underline" href="#">+47 99 99 99 99</a>
      </div>
    </div>
    <div>
      <div className="container px-3 flex justify-between items-center">
        <Link onClick={handleLinkClick} to="/" className="uppercase text-3xl m-2">
          <span className="text-primary border-primary border-2 px-2 xs:border-0">l<span className="hidden xs:inline">innus</span></span><span className="bg-primary border-primary border-2 text-white px-2">f<span  className="hidden xs:inline">ritid</span></span>
        </Link>
        <div className="w-1/2">
          {location.pathname === '/' && (
          <SearchInput data={data} />
            )}
        </div>
        <CartButton />
      </div>
    </div>
  </header>
)
}
export default Header;
