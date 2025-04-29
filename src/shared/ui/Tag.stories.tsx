// src/shared/ui/TestComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';


const meta: Meta<typeof Tag> = {
  title: 'Shared/Tag',
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const testComponents: Story = {
  args:{
    tag : "React",
  }
};
