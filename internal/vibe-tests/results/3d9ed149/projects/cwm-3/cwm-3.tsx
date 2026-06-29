// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
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
    <div>
      {hasCover && (
        <div style={{height: 200, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 8, marginBottom: 16}} />
      )}

      <div style={{display: 'flex', alignItems: 'flex-start', gap: 12}}>
        <Popover
          isOpen={showIconPicker}
          onOpenChange={setShowIconPicker}
          trigger={
            <Button variant="ghost" onPress={() => setShowIconPicker(true)}>
              <span style={{fontSize: 48}}>{icon}</span>
            </Button>
          }
        >
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: 8}}>
            {ICONS.map(i => (
              <Button key={i} variant="ghost" onPress={() => { setIcon(i); setShowIconPicker(false); }}>
                <span style={{fontSize: 24}}>{i}</span>
              </Button>
            ))}
          </div>
        </Popover>

        <div style={{flex: 1}}>
          {isEditing ? (
            <TextInput
              label="Page title"
              isLabelHidden
              value={title}
              onChange={setTitle}
            />
          ) : (
            <Text type="display-2" as="div">
              <span onClick={() => setIsEditing(true)} style={{cursor: 'text'}}>
                {title}
              </span>
            </Text>
          )}
        </div>
      </div>

      {!hasCover && (
        <Button variant="ghost" size="sm" onPress={() => setHasCover(true)}>
          Add cover
        </Button>
      )}
    </div>
  );
}
