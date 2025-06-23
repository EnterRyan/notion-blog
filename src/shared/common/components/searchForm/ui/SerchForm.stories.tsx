import SearchForm from './searchForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchForm> = {
  title: 'Common/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  render: () => <SearchForm />,
};
