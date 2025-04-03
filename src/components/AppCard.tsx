
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
    <Card className="w-full h-full border border-border transition-all hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <code className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">
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
