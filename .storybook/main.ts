import type { StorybookConfig } from '@storybook/nextjs';
import * as path from "path";

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: ['../public'],
};

export default config;