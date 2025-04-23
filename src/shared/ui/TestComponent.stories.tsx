// src/shared/ui/TestComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TestComponent from './TestComponents';

const meta: Meta<typeof TestComponent> = {
  title: 'Shared/TestComponent',
  component: TestComponent,
};

export default meta;

type Story = StoryObj<typeof TestComponent>;

export const testComponents: Story = {};
