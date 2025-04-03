
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="search"
        placeholder="Search for applications..."
        className="pl-10 w-full h-12 bg-white/10 backdrop-blur-lg border border-gray-200"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
