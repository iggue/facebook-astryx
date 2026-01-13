/**
 * Public CSS Variables
 *
 * Maps internal StyleX tokens to public CSS variable names.
 * These can be used by consumers without needing StyleX.
 *
 * Usage in plain CSS:
 *   background-color: var(--xds-surface);
 *   color: var(--xds-text-primary);
 */

import * as stylex from '@stylexjs/stylex';
import {
  colorTokens,
  elevationTokens,
  spacingTokens,
  radiusTokens,
  transitionTokens,
  typographyTokens,
} from './tokens.stylex';

export const publicVariables = stylex.create({
  all: {
    // Color tokens
    '--xds-accent': colorTokens.accent,
    '--xds-accent-deemphasized': colorTokens.accentDeemphasized,
    '--xds-accent-text': colorTokens.accentText,
    '--xds-surface': colorTokens.surface,
    '--xds-wash': colorTokens.wash,
    '--xds-overlay': colorTokens.overlay,
    '--xds-hover-overlay': colorTokens.hoverOverlay,
    '--xds-pressed-overlay': colorTokens.pressedOverlay,
    '--xds-focus-outline': colorTokens.focusOutline,
    '--xds-deemphasized': colorTokens.deemphasized,

    // Text
    '--xds-text-primary': colorTokens.textPrimary,
    '--xds-text-secondary': colorTokens.textSecondary,
    '--xds-text-disabled': colorTokens.textDisabled,
    '--xds-text-link': colorTokens.textLink,
    '--xds-text-placeholder': colorTokens.textPlaceholder,

    // Icon
    '--xds-icon-primary': colorTokens.iconPrimary,
    '--xds-icon-secondary': colorTokens.iconSecondary,
    '--xds-icon-tertiary': colorTokens.iconTertiary,
    '--xds-icon-disabled': colorTokens.iconDisabled,

    // Surface variants
    '--xds-card': colorTokens.card,
    '--xds-popover': colorTokens.popover,
    '--xds-navbar': colorTokens.navbar,

    // Status
    '--xds-positive': colorTokens.positive,
    '--xds-positive-deemphasized': colorTokens.positiveDeemphasized,
    '--xds-negative': colorTokens.negative,
    '--xds-negative-deemphasized': colorTokens.negativeDeemphasized,
    '--xds-warning': colorTokens.warning,
    '--xds-warning-deemphasized': colorTokens.warningDeemphasized,
    '--xds-educational': colorTokens.educational,
    '--xds-educational-deemphasized': colorTokens.educationalDeemphasized,

    // Divider
    '--xds-divider': colorTokens.divider,
    '--xds-divider-high-contrast': colorTokens.dividerHighContrast,
    '--xds-divider-emphasized': colorTokens.dividerEmphasized,

    // Effects
    '--xds-disabled-overlay': colorTokens.disabledOverlay,
    '--xds-glimmer': colorTokens.glimmer,
    '--xds-glimmer-high-contrast': colorTokens.glimmerHighContrast,
    '--xds-shadow-elevation': colorTokens.shadowElevation,

    // Elevation
    '--xds-elevation-base': elevationTokens.base,
    '--xds-elevation-thumb': elevationTokens.thumb,
    '--xds-elevation-dialog': elevationTokens.dialog,
    '--xds-elevation-hover': elevationTokens.hover,
    '--xds-elevation-menu': elevationTokens.menu,

    // Spacing
    '--xds-space-0': spacingTokens.space0,
    '--xds-space-0-5': spacingTokens.space0_5,
    '--xds-space-1': spacingTokens.space1,
    '--xds-space-2': spacingTokens.space2,
    '--xds-space-3': spacingTokens.space3,
    '--xds-space-4': spacingTokens.space4,
    '--xds-space-5': spacingTokens.space5,
    '--xds-space-6': spacingTokens.space6,
    '--xds-space-7': spacingTokens.space7,

    // Radius
    '--xds-radius-rounded': radiusTokens.rounded,
    '--xds-radius-container': radiusTokens.container,
    '--xds-radius-element': radiusTokens.element,
    '--xds-radius-content': radiusTokens.content,

    // Transition
    '--xds-transition-fast': transitionTokens.fast,
    '--xds-transition-normal': transitionTokens.normal,

    // Typography
    '--xds-font-body': typographyTokens.fontFamilyBody,
    '--xds-font-code': typographyTokens.fontFamilyCode,
    '--xds-font-heading': typographyTokens.fontFamilyHeading,
  },
});
