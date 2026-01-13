/**
 * XDS Theme Type Definitions
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleXTheme = any;

/**
 * Theme mode - system follows OS preference
 */
export type ThemeMode = 'system' | 'light' | 'dark';

/**
 * Theme object - pre-compiled StyleX theme
 */
export interface Theme {
  /** Theme name */
  name: string;
  /** Color theme StyleX styles */
  colorTheme: StyleXTheme;
  /** Elevation theme StyleX styles */
  elevationTheme: StyleXTheme;
  /** Spacing theme StyleX styles (optional) */
  spacingTheme?: StyleXTheme;
  /** Radius theme StyleX styles (optional) */
  radiusTheme?: StyleXTheme;
  /** Transition theme StyleX styles (optional) */
  transitionTheme?: StyleXTheme;
  /** Typography theme StyleX styles (optional) */
  typographyTheme?: StyleXTheme;
}
