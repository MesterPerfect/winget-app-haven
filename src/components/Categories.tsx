
import React from 'react';
import { Button } from './ui/button';

const categories = [
  'All',
  'Development',
  'Design',
  'Productivity',
  'Security',
  'Communication',
];

const Categories = ({ onSelect }: { onSelect: (category: string) => void }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          className="whitespace-nowrap border-border hover:bg-secondary"
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
