// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Popover} from '@astryxdesign/core/Popover';
import {TextInput} from '@astryxdesign/core/TextInput';

const ICONS = ['📄', '🎯', '🚀', '💡', '📝', '🎨', '🔬', '📊'];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('📄');
  const [title, setTitle] = useState('Untitled');
  const [hasCover, setHasCover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      {hasCover && (
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4" />
      )}

      <div className="flex items-start gap-3 px-4">
        <Popover
          isOpen={showIconPicker}
          onOpenChange={setShowIconPicker}
          trigger={
            <Button variant="ghost" onPress={() => setShowIconPicker(true)}>
              <span className="text-5xl">{icon}</span>
            </Button>
          }
        >
          <div className="grid grid-cols-4 gap-2 p-3">
            {ICONS.map(i => (
              <Button key={i} variant="ghost" onPress={() => { setIcon(i); setShowIconPicker(false); }}>
                <span className="text-2xl">{i}</span>
              </Button>
            ))}
          </div>
        </Popover>

        <div className="flex-1">
          {isEditing ? (
            <TextInput
              label="Page title"
              isLabelHidden
              value={title}
              onChange={setTitle}
            />
          ) : (
            <Text type="display-2" as="div">
              <span onClick={() => setIsEditing(true)} className="cursor-text hover:bg-gray-100 rounded px-1">
                {title}
              </span>
            </Text>
          )}
        </div>
      </div>

      {!hasCover && (
        <div className="mt-2 px-4">
          <Button variant="ghost" size="sm" onPress={() => setHasCover(true)}>
            Add cover
          </Button>
        </div>
      )}
    </div>
  );
}
