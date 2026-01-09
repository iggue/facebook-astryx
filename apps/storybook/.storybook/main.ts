import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    {
      directory: '../../../packages/core/src',
      titlePrefix: 'Core',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../../packages/patterns/src',
      titlePrefix: 'Patterns',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@xds/core': join(__dirname, '../../../packages/core/src'),
    };
    return config;
  },
};

export default config;
