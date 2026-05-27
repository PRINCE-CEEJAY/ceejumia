import { Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: handle Searching
  };
  return (
    <div className='flex px-3 py-2 justify-between w-full bg-white/30 shadow-lg m-2 items-center'>
      <div className='flex text-3xl items-center'>
        <span> CEEJUMIA </span>
        <span className='rounded-full h-6 w-6 bg-amber-600'>
          <Star
            className='text-white bg-white border-none'
            size={4}
          />
        </span>
      </div>
      <div className='flex items-center space-x-1'>
        <input
          className='p-2 rounded-md border-2 ring-2 italic'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search products here ...'
        />
        <Button
          variant='outline'
          className='cursor-pointer'
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
