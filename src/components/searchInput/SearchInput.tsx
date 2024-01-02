import useSearchStore from '../../store/SearchStore';
import { Data } from '../api/getData/getData';

type SearchInputProps = {
  data: Data[];
};

export function SearchInput({ data }: SearchInputProps) {
  const { searchTerm, setSearchTerm, setSearchResults } = useSearchStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const results = data.filter(item =>
      item.title.includes(newSearchTerm) ||
      (item.tags && item.tags.some(tag => tag.includes(newSearchTerm)))
    ).map(item => ({
      title: item.title,
      tags: item.tags || []
    }));

    setSearchResults(results);
    console.log(searchTerm)
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
