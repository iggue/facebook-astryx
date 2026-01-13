# StyleX Patterns and Challenges

Notes on StyleX usage patterns discovered while building XDS components.

## Compile-Time Requirement

StyleX requires all styles to be compiled at build time via the Babel plugin. You cannot use `stylex.create()` at runtime (e.g., in Storybook's preview.tsx).

**Solution**: Pre-compile styles in the component library and export them, or use plain CSS/inline styles in non-compiled contexts.

## Combined Pseudo-Selectors

StyleX has limited support for combined pseudo-selectors like `:hover::after` or `:active::after`.

**Problem**: Tried using `::after` pseudo-element for hover/active overlay effects:
```tsx
const styles = stylex.create({
  base: {
    '::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'transparent',
    },
    ':hover::after': {
      backgroundColor: colorTokens.hoverOverlay,
    },
    ':active::after': {
      backgroundColor: colorTokens.pressedOverlay,
    },
  },
});
```

This approach did not work as expected.

**Solution**: Use `backgroundImage` with `linear-gradient` to layer colors:
```tsx
const variants = stylex.create({
  primary: {
    backgroundColor: colorTokens.accent,
    color: 'white',
    ':hover': {
      backgroundImage: `linear-gradient(${colorTokens.hoverOverlay}, ${colorTokens.hoverOverlay})`,
    },
    ':active': {
      backgroundImage: `linear-gradient(${colorTokens.pressedOverlay}, ${colorTokens.pressedOverlay})`,
    },
  },
});
```

Since `background-image` renders on top of `background-color`, the semi-transparent overlay blends naturally with the base color.

## Theme Variables with light-dark()

StyleX works well with CSS `light-dark()` function for automatic dark mode support:
```tsx
const colorTheme = stylex.createTheme(colorTokens, {
  accent: 'light-dark(#0064E0, #2694FE)',
  surface: 'light-dark(#FFFFFF, #1C1C1C)',
});
```

The Theme provider sets `color-scheme` property to control which value is used:
```tsx
const wrapperStyles = stylex.create({
  light: { colorScheme: 'light' },
  dark: { colorScheme: 'dark' },
  system: { colorScheme: 'light dark' },
});
```

## Public CSS Variables

To expose StyleX tokens as predictable CSS variables for non-StyleX consumers:
```tsx
export const publicVariables = stylex.create({
  all: {
    '--xds-accent': colorTokens.accent,
    '--xds-surface': colorTokens.surface,
    // ... map all tokens
  },
});
```

Apply in Theme provider:
```tsx
const stylexProps = stylex.props(
  publicVariables.all,
  theme.colorTheme,
  // ... other themes
);
```

Consumers can then use `var(--xds-surface)` in plain CSS or inline styles.
