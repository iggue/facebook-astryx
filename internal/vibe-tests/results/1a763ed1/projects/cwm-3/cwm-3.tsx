// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Text';
import {Popover} from '@astryxdesign/core/Popover';

const icons = ['📄', '🎯', '📋', '💡', '🔧', '📊', '🎨', '📝', '🚀', '⭐', '📌', '🔗'];
const coverImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=200&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=200&fit=crop',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=200&fit=crop',
];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('📄');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  return (
    <Card padding={0}>
      <div className="relative">
        {coverImage ? (
          <img src={coverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
        ) : (
          <div className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
            <Button label="Add cover" variant="ghost" onClick={() => setCoverImage(coverImages[0])} />
          </div>
        )}
        <div className="absolute -bottom-8 left-6 text-5xl cursor-pointer">
          <Popover
            isOpen={isIconPickerOpen}
            onOpenChange={setIsIconPickerOpen}
            trigger={<span role="button" tabIndex={0} onClick={() => setIsIconPickerOpen(true)}>{selectedIcon}</span>}
            content={
              <div className="grid grid-cols-6 gap-2 p-2">
                {icons.map(icon => (
                  <span key={icon} role="button" tabIndex={0} className="text-2xl text-center p-1 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => {setSelectedIcon(icon); setIsIconPickerOpen(false);}}>
                    {icon}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </div>
      <div className="mt-12 px-6 pb-4">
        <Heading level={1}>Untitled</Heading>
        {coverImage && (
          <Button label="Change cover" variant="ghost" size="sm"
            onClick={() => {const idx = coverImages.indexOf(coverImage); setCoverImage(coverImages[(idx+1)%coverImages.length]);}} />
        )}
      </div>
    </Card>
  );
}
