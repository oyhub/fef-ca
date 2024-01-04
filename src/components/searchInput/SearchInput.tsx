import useSearchStore from '../../store/SearchStore';
import { Data } from '../api/getData/getData';

type SearchInputProps = {
  data: Data[];
};

export function SearchInput({ data = [] }: SearchInputProps) {
  const { searchTerm, setSearchTerm, setSearchResults } = useSearchStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    const lowerCaseTrimmedSearchTerm = newSearchTerm.toLowerCase().trim()
    setSearchTerm(newSearchTerm);

    const results = data.filter(item =>
      item.title.toLowerCase().trim().includes(lowerCaseTrimmedSearchTerm) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().trim().includes(lowerCaseTrimmedSearchTerm)))
    );

    if (newSearchTerm === ""){
      setSearchResults([])
    } else {
      setSearchResults(results);
    }
  };

  return (
    <input
      aria-label="Search product"
      type="search"
      placeholder="Search"
      className="p-2 w-full max-w-xl shadow border-1 rounded"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default SearchInput;
