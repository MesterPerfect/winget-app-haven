
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AppCard from '../components/AppCard';
import Categories from '../components/Categories';
import { ThemeToggle } from '../components/ThemeToggle';

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
  {
    id: 4,
    name: 'Adobe Photoshop',
    description: 'Professional photo editing software',
    installCommand: 'winget install Adobe.Photoshop',
    category: 'Design',
  },
  {
    id: 5,
    name: 'Microsoft Office',
    description: 'Productivity suite for documents, spreadsheets, and presentations',
    installCommand: 'winget install Microsoft.Office',
    category: 'Productivity',
  },
  {
    id: 6,
    name: 'Spotify',
    description: 'Digital music streaming service',
    installCommand: 'winget install Spotify.Spotify',
    category: 'Media',
  },
  {
    id: 7,
    name: 'Discord',
    description: 'Voice, video and text communication platform',
    installCommand: 'winget install Discord.Discord',
    category: 'Communication',
  },
  {
    id: 8,
    name: 'Malwarebytes',
    description: 'Anti-malware application for Windows',
    installCommand: 'winget install Malwarebytes.Malwarebytes',
    category: 'Security',
  },
  {
    id: 9,
    name: 'OBS Studio',
    description: 'Software for live streaming and screen recording',
    installCommand: 'winget install OBSProject.OBSStudio',
    category: 'Media',
  },
  {
    id: 10,
    name: 'Steam',
    description: 'Digital game distribution platform',
    installCommand: 'winget install Valve.Steam',
    category: 'Gaming',
  },
  {
    id: 11,
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases',
    installCommand: 'winget install Notion.Notion',
    category: 'Productivity',
  },
  {
    id: 12,
    name: 'Adobe Illustrator',
    description: 'Vector graphics editor',
    installCommand: 'winget install Adobe.Illustrator',
    category: 'Design',
  },
  {
    id: 13,
    name: '7-Zip',
    description: 'File archiver with a high compression ratio',
    installCommand: 'winget install 7zip.7zip',
    category: 'Utilities',
  },
  {
    id: 14,
    name: 'VLC Media Player',
    description: 'Free and open source multimedia player',
    installCommand: 'winget install VideoLAN.VLC',
    category: 'Media',
  },
  {
    id: 15,
    name: 'Slack',
    description: 'Business communication platform',
    installCommand: 'winget install SlackTechnologies.Slack',
    category: 'Communication',
  },
  {
    id: 16,
    name: 'Google Chrome',
    description: 'Fast, secure, and free web browser by Google',
    installCommand: 'winget install Google.Chrome',
    category: 'Communication',
  },
  {
    id: 17,
    name: 'Audacity',
    description: 'Free, open source audio editor',
    installCommand: 'winget install Audacity.Audacity',
    category: 'Media',
  },
  {
    id: 18,
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine',
    installCommand: 'winget install OpenJS.NodeJS',
    category: 'Development',
  },
  {
    id: 19,
    name: 'Microsoft Teams',
    description: 'Chat-based workspace in Office 365',
    installCommand: 'winget install Microsoft.Teams',
    category: 'Communication',
  },
  {
    id: 20,
    name: 'Blender',
    description: '3D creation suite',
    installCommand: 'winget install BlenderFoundation.Blender',
    category: 'Design',
  },
  {
    id: 21,
    name: 'Python',
    description: 'Programming language that lets you work quickly',
    installCommand: 'winget install Python.Python.3',
    category: 'Development',
  },
  {
    id: 22,
    name: 'Zoom',
    description: 'Video conferencing, web conferencing, and webinars',
    installCommand: 'winget install Zoom.Zoom',
    category: 'Communication',
  },
  {
    id: 23,
    name: 'Dropbox',
    description: 'Cloud storage service',
    installCommand: 'winget install Dropbox.Dropbox',
    category: 'Cloud',
  },
  {
    id: 24,
    name: 'Figma',
    description: 'Collaborative interface design tool',
    installCommand: 'winget install Figma.Figma',
    category: 'Design',
  },
  {
    id: 25,
    name: 'Trello',
    description: 'Web-based Kanban-style list-making application',
    installCommand: 'winget install Atlassian.Trello',
    category: 'Productivity',
  },
  {
    id: 26,
    name: 'Brave Browser',
    description: 'Privacy-focused browser',
    installCommand: 'winget install Brave.Brave',
    category: 'Communication',
  },
  {
    id: 27,
    name: 'WinRAR',
    description: 'File archiver utility',
    installCommand: 'winget install RARLab.WinRAR',
    category: 'Utilities',
  },
  {
    id: 28,
    name: 'AutoHotkey',
    description: 'Free, open-source scripting language for Windows',
    installCommand: 'winget install Lexikos.AutoHotkey',
    category: 'Utilities',
  },
  {
    id: 29,
    name: 'Evernote',
    description: 'Note-taking and task management application',
    installCommand: 'winget install evernote.evernote',
    category: 'Productivity',
  },
  {
    id: 30,
    name: 'Microsoft Edge',
    description: 'Cross-platform web browser',
    installCommand: 'winget install Microsoft.Edge',
    category: 'Communication',
  },
  {
    id: 31,
    name: 'GitHub Desktop',
    description: 'GitHub client for Windows',
    installCommand: 'winget install GitHub.GitHubDesktop',
    category: 'Development',
  },
  {
    id: 32,
    name: 'Minecraft',
    description: 'Sandbox video game',
    installCommand: 'winget install Mojang.MinecraftLauncher',
    category: 'Gaming',
  },
  {
    id: 33,
    name: 'Adobe Acrobat Reader',
    description: 'PDF reader and viewer',
    installCommand: 'winget install Adobe.Acrobat.Reader.64-bit',
    category: 'Utilities',
  },
  {
    id: 34,
    name: 'Epic Games Launcher',
    description: 'Game launcher for Epic Games titles',
    installCommand: 'winget install EpicGames.EpicGamesLauncher',
    category: 'Gaming',
  },
  {
    id: 35,
    name: 'WhatsApp',
    description: 'Messaging and voice-over-IP service',
    installCommand: 'winget install WhatsApp.WhatsApp',
    category: 'Social',
  },
  {
    id: 36,
    name: 'IntelliJ IDEA',
    description: 'Integrated development environment for Java',
    installCommand: 'winget install JetBrains.IntelliJIDEA.Community',
    category: 'Development',
  },
  {
    id: 37,
    name: 'Google Drive',
    description: 'File storage and synchronization service',
    installCommand: 'winget install Google.Drive',
    category: 'Cloud',
  },
  {
    id: 38,
    name: 'Microsoft PowerToys',
    description: 'Windows system utilities to maximize productivity',
    installCommand: 'winget install Microsoft.PowerToys',
    category: 'Utilities',
  },
  {
    id: 39,
    name: 'Skype',
    description: 'Telecommunications application for video chats and voice calls',
    installCommand: 'winget install Microsoft.Skype',
    category: 'Communication',
  },
  {
    id: 40,
    name: 'GeoGebra',
    description: 'Dynamic mathematics software',
    installCommand: 'winget install GeoGebra.Classic',
    category: 'Education',
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
    <div className="min-h-screen bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header with Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Windows Package Manager Haven
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

        {/* No results message */}
        {filteredApps.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-muted-foreground">No applications found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
