
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Type definition for category counts
interface CategoryCount {
  [key: string]: number;
}

const categories = [
  'All',
  'Development',
  'Design',
  'Productivity',
  'Security',
  'Communication',
  'Utilities',
  'Media',
  'Gaming',
  'Education',
  'Social',
  'Cloud',
  'Screen Reader',
  'Tecwindow',
];

const Categories = ({ 
  onSelect, 
  categoryCounts 
}: { 
  onSelect: (category: string) => void; 
  categoryCounts: CategoryCount;
}) => {
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
          {category !== 'All' && categoryCounts[category] > 0 && (
            <Badge variant="secondary" className="ml-2">
              {categoryCounts[category]}
            </Badge>
          )}
          {category === 'All' && (
            <Badge variant="secondary" className="ml-2">
              {Object.values(categoryCounts).reduce((acc, count) => acc + count, 0) - (categoryCounts['All'] || 0)}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
