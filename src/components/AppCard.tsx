
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';

interface AppCardProps {
  name: string;
  description: string;
  installCommand: string;
  category: string;
}

const AppCard = ({ name, description, installCommand, category }: AppCardProps) => {
  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    toast.success('Command copied to clipboard!');
  };

  return (
    <Card className="w-full h-full bg-white/10 backdrop-blur-lg border border-gray-200 hover:border-blue-400 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
          {installCommand}
        </code>
        <Button variant="ghost" size="sm" onClick={copyCommand}>
          <Copy className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;
