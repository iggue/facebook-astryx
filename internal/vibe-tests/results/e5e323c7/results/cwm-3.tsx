// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from './components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from './components/ui/popover';
import {Input} from './components/ui/input';

const ICONS = ['📄', '🎯', '🚀', '💡', '📝', '🎨', '🔬', '📊'];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('📄');
  const [title, setTitle] = useState('Untitled');
  const [hasCover, setHasCover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      {hasCover && (
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4" />
      )}

      <div className="flex items-start gap-3 px-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-5xl p-2 h-auto">{icon}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div className="grid grid-cols-4 gap-2">
              {ICONS.map(i => (
                <Button key={i} variant="ghost" className="text-2xl" onClick={() => setIcon(i)}>
                  {i}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex-1">
          {isEditing ? (
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditing(false)}
              className="text-4xl font-bold border-none p-0 h-auto"
              autoFocus
            />
          ) : (
            <h1
              onClick={() => setIsEditing(true)}
              className="text-4xl font-bold cursor-text hover:bg-muted rounded px-1"
            >
              {title}
            </h1>
          )}
        </div>
      </div>

      {!hasCover && (
        <div className="mt-2 px-4">
          <Button variant="ghost" size="sm" onClick={() => setHasCover(true)}>
            Add cover
          </Button>
        </div>
      )}
    </div>
  );
}
