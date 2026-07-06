// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Heading} from '@astryxdesign/core/Text';
import {Popover} from '@astryxdesign/core/Popover';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    position: 'relative',
  },
  cover: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 8,
  },
  coverPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconArea: {
    position: 'absolute',
    bottom: -30,
    left: 24,
    fontSize: 48,
    cursor: 'pointer',
  },
  titleArea: {
    marginTop: 40,
    paddingLeft: 24,
    paddingRight: 24,
  },
  iconGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: 8,
    padding: 8,
  },
  iconOption: {
    fontSize: 24,
    cursor: 'pointer',
    textAlign: 'center',
    padding: 4,
    borderRadius: 4,
  },
});

const icons = ['📄', '🎯', '📋', '💡', '🔧', '📊', '🎨', '📝', '🚀', '⭐', '📌', '🔗'];
const coverImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=200&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=200&fit=crop',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=200&fit=crop',
];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('📄');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [title, setTitle] = useState('Untitled');
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  return (
    <Card padding={0}>
      <div {...stylex.props(styles.header)}>
        {coverImage ? (
          <img src={coverImage} alt="Cover" {...stylex.props(styles.cover)} />
        ) : (
          <div {...stylex.props(styles.coverPlaceholder)}>
            <Button
              label="Add cover"
              variant="ghost"
              onClick={() => setCoverImage(coverImages[0])}
            />
          </div>
        )}
        <div {...stylex.props(styles.iconArea)}>
          <Popover
            isOpen={isIconPickerOpen}
            onOpenChange={setIsIconPickerOpen}
            trigger={<span role="button" tabIndex={0} onClick={() => setIsIconPickerOpen(true)}>{selectedIcon}</span>}
            content={
              <div {...stylex.props(styles.iconGrid)}>
                {icons.map(icon => (
                  <span
                    key={icon}
                    role="button"
                    tabIndex={0}
                    {...stylex.props(styles.iconOption)}
                    onClick={() => {setSelectedIcon(icon); setIsIconPickerOpen(false);}}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </div>
      <div {...stylex.props(styles.titleArea)}>
        <Heading level={1}>{title}</Heading>
        {coverImage && (
          <Button
            label="Change cover"
            variant="ghost"
            size="sm"
            onClick={() => {
              const idx = coverImages.indexOf(coverImage);
              setCoverImage(coverImages[(idx + 1) % coverImages.length]);
            }}
          />
        )}
      </div>
    </Card>
  );
}
