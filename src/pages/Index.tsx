
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AppCard from '../components/AppCard';
import Categories from '../components/Categories';

// Mock data - replace with actual API calls later
const mockApps = [
  {
    id: 1,
    name: 'Visual Studio Code',
    description: 'Code editing. Redefined.',
    installCommand: 'winget install Microsoft.VisualStudioCode',
    category: 'Development',
  },
  {
    id: 2,
    name: 'Firefox',
    description: 'Fast, private and secure web browser',
    installCommand: 'winget install Mozilla.Firefox',
    category: 'Communication',
  },
  {
    id: 3,
    name: 'Git',
    description: 'Distributed version control system',
    installCommand: 'winget install Git.Git',
    category: 'Development',
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredApps = mockApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Windows Package Manager Haven
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and install Windows applications with just one command
          </p>
          <div className="flex justify-center">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <Categories onSelect={setSelectedCategory} />
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
