// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

const icons = ['📄', '🎯', '📋', '💡', '🔧', '📊', '🎨', '📝', '🚀', '⭐', '📌', '🔗'];
const coverImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=200&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=200&fit=crop',
];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('📄');
  const [coverImage, setCoverImage] = useState<string | null>(null);

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {coverImage ? (
          <img src={coverImage} alt="Cover" className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-muted flex items-center justify-center">
            <Button variant="ghost" onClick={() => setCoverImage(coverImages[0])}>Add cover</Button>
          </div>
        )}
        <div className="absolute -bottom-8 left-6">
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-5xl hover:opacity-80">{selectedIcon}</button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid grid-cols-6 gap-2">
                {icons.map(icon => (
                  <button key={icon} className="text-2xl p-1 rounded hover:bg-muted" onClick={() => setSelectedIcon(icon)}>{icon}</button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-12 px-6 pb-4">
        <h1 className="text-3xl font-bold">Untitled</h1>
        {coverImage && <Button variant="ghost" size="sm" onClick={() => setCoverImage(coverImages[1])}>Change cover</Button>}
      </div>
    </Card>
  );
}
